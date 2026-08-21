# Image Compression Script - PNG Output
# Converts large PNGs to compressed PNGs with white background (target: under 150KB)
# Resizes to max 1200px width, maintains aspect ratio

Add-Type -AssemblyName System.Drawing

$sourceFolders = @(
    "C:\Users\yourt\Downloads\Power Books-20260810T053534Z-1-001\Power Books",
    "C:\Users\yourt\Downloads\Power Books-20260810T053534Z-1-002\Power Books",
    "C:\Users\yourt\Downloads\Power Books-20260810T053534Z-1-003\Power Books"
)

$outputFolder = "C:\Users\yourt\Downloads\Power Books Compressed\PNG"

# Create output folder
if (!(Test-Path $outputFolder)) {
    New-Item -ItemType Directory -Path $outputFolder -Force | Out-Null
}

$maxWidth = 1200
$targetMaxKB = 150

# We'll try progressively smaller sizes if PNG is too large
$widthAttempts = @(1200, 1000, 800, 600, 500, 400)

$totalFiles = 0
$processedFiles = 0

# Count total files first
foreach ($folder in $sourceFolders) {
    $files = Get-ChildItem -Path $folder -Filter "*.png" -ErrorAction SilentlyContinue
    $totalFiles += $files.Count
}

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  PNG Compression Script" -ForegroundColor Cyan
Write-Host "  Total images to process: $totalFiles" -ForegroundColor Cyan
Write-Host "  Output: $outputFolder" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

foreach ($folder in $sourceFolders) {
    $folderName = Split-Path $folder -Parent | Split-Path -Leaf
    Write-Host "Processing folder: $folderName" -ForegroundColor Yellow
    
    $files = Get-ChildItem -Path $folder -Filter "*.png" -ErrorAction SilentlyContinue
    
    foreach ($file in $files) {
        $processedFiles++
        $outputFile = Join-Path $outputFolder $file.Name
        
        Write-Host "  [$processedFiles/$totalFiles] $($file.Name) ($([math]::Round($file.Length / 1MB, 1)) MB)" -NoNewline
        
        try {
            # Load the image
            $image = [System.Drawing.Image]::FromFile($file.FullName)
            $originalWidth = $image.Width
            $originalHeight = $image.Height
            
            $savedOk = $false
            
            foreach ($tryWidth in $widthAttempts) {
                # Calculate dimensions
                if ($originalWidth -gt $tryWidth) {
                    $ratio = $tryWidth / $originalWidth
                    $newWidth = $tryWidth
                    $newHeight = [math]::Round($originalHeight * $ratio)
                } else {
                    $newWidth = $originalWidth
                    $newHeight = $originalHeight
                }
                
                # Create resized bitmap with transparency support
                $resized = New-Object System.Drawing.Bitmap($newWidth, $newHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
                $graphics = [System.Drawing.Graphics]::FromImage($resized)
                $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
                $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
                
                # Keep transparent background (no fill)
                
                $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
                
                # Save to memory stream to check size
                $ms = New-Object System.IO.MemoryStream
                $resized.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
                $sizeKB = [math]::Round($ms.Length / 1KB, 1)
                $ms.Dispose()
                
                if ($sizeKB -le $targetMaxKB) {
                    # Save the file
                    $resized.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Png)
                    $finalSize = [math]::Round((Get-Item $outputFile).Length / 1KB, 1)
                    Write-Host " -> $($finalSize)KB (${tryWidth}px) OK" -ForegroundColor Green
                    $savedOk = $true
                    $graphics.Dispose()
                    $resized.Dispose()
                    break
                }
                
                $graphics.Dispose()
                $resized.Dispose()
            }
            
            # If none of the sizes worked, save at smallest attempted width
            if (-not $savedOk) {
                $smallWidth = $widthAttempts[-1]
                $ratio = $smallWidth / $originalWidth
                $newWidth = $smallWidth
                $newHeight = [math]::Round($originalHeight * $ratio)
                
                $resized = New-Object System.Drawing.Bitmap($newWidth, $newHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
                $graphics = [System.Drawing.Graphics]::FromImage($resized)
                $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
                # Keep transparent background (no fill)
                $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
                
                $resized.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Png)
                $finalSize = [math]::Round((Get-Item $outputFile).Length / 1KB, 1)
                
                if ($finalSize -le $targetMaxKB) {
                    Write-Host " -> $($finalSize)KB (${smallWidth}px) OK" -ForegroundColor Green
                } else {
                    Write-Host " -> $($finalSize)KB (${smallWidth}px) Over target" -ForegroundColor Red
                }
                
                $graphics.Dispose()
                $resized.Dispose()
            }
            
            $image.Dispose()
            
        } catch {
            Write-Host " -> ERROR: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    Write-Host ""
}

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  PNG Compression Complete!" -ForegroundColor Cyan
Write-Host "  Output: $outputFolder" -ForegroundColor Cyan

# Show summary
$outputFiles = Get-ChildItem -Path $outputFolder -Filter "*.png" -ErrorAction SilentlyContinue
if ($outputFiles) {
    $totalOutputSize = ($outputFiles | Measure-Object -Property Length -Sum).Sum
    $avgSize = [math]::Round(($totalOutputSize / $outputFiles.Count) / 1KB, 1)
    Write-Host "  Files: $($outputFiles.Count)" -ForegroundColor Cyan
    Write-Host "  Total size: $([math]::Round($totalOutputSize / 1MB, 1)) MB" -ForegroundColor Cyan
    Write-Host "  Average size: $($avgSize) KB" -ForegroundColor Cyan
}
Write-Host "======================================" -ForegroundColor Cyan

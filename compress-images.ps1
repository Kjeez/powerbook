# Image Compression Script
# Converts large PNGs to optimized JPEGs (target: 50-150KB)
# Resizes to max 1200px width, maintains aspect ratio

Add-Type -AssemblyName System.Drawing

$sourceFolders = @(
    "C:\Users\yourt\Downloads\Power Books-20260810T053534Z-1-001\Power Books",
    "C:\Users\yourt\Downloads\Power Books-20260810T053534Z-1-002\Power Books",
    "C:\Users\yourt\Downloads\Power Books-20260810T053534Z-1-003\Power Books"
)

$outputFolder = "C:\Users\yourt\Downloads\Power Books Compressed"

# Create output folder
if (!(Test-Path $outputFolder)) {
    New-Item -ItemType Directory -Path $outputFolder -Force | Out-Null
}

$maxWidth = 1200
$targetMaxKB = 150
$targetMinKB = 50

# JPEG quality levels to try (descending)
$qualityLevels = @(85, 75, 65, 55, 45, 35, 25)

$totalFiles = 0
$processedFiles = 0

# Count total files first
foreach ($folder in $sourceFolders) {
    $files = Get-ChildItem -Path $folder -Filter "*.png" -ErrorAction SilentlyContinue
    $totalFiles += $files.Count
}

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  Image Compression Script" -ForegroundColor Cyan
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
        $outputFile = Join-Path $outputFolder ($file.BaseName + ".jpg")
        
        Write-Host "  [$processedFiles/$totalFiles] $($file.Name) ($([math]::Round($file.Length / 1MB, 1)) MB)" -NoNewline
        
        try {
            # Load the image
            $image = [System.Drawing.Image]::FromFile($file.FullName)
            
            # Calculate new dimensions (max width 1200px, maintain aspect ratio)
            $originalWidth = $image.Width
            $originalHeight = $image.Height
            
            if ($originalWidth -gt $maxWidth) {
                $ratio = $maxWidth / $originalWidth
                $newWidth = $maxWidth
                $newHeight = [math]::Round($originalHeight * $ratio)
            } else {
                $newWidth = $originalWidth
                $newHeight = $originalHeight
            }
            
            # Create resized bitmap
            $resized = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
            $graphics = [System.Drawing.Graphics]::FromImage($resized)
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            
            # Fill with white background (so transparent areas become white, not black)
            $graphics.Clear([System.Drawing.Color]::White)
            
            $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
            
            # Get JPEG encoder
            $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
            $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
            
            # Try different quality levels to hit target size
            $bestFile = $null
            $bestSize = 0
            
            foreach ($quality in $qualityLevels) {
                $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
                    [System.Drawing.Imaging.Encoder]::Quality, [long]$quality
                )
                
                # Save to memory stream first to check size
                $ms = New-Object System.IO.MemoryStream
                $resized.Save($ms, $jpegCodec, $encoderParams)
                $sizeKB = [math]::Round($ms.Length / 1KB, 1)
                $ms.Dispose()
                
                if ($sizeKB -le $targetMaxKB) {
                    # This quality fits within target
                    $bestFile = $quality
                    $bestSize = $sizeKB
                    break
                }
                
                # Track the last attempt in case none fit
                $bestFile = $quality
                $bestSize = $sizeKB
            }
            
            # Save with best quality that fits
            $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
                [System.Drawing.Imaging.Encoder]::Quality, [long]$bestFile
            )
            $resized.Save($outputFile, $jpegCodec, $encoderParams)
            
            $finalSize = [math]::Round((Get-Item $outputFile).Length / 1KB, 1)
            
            # Color code based on target range
            if ($finalSize -ge $targetMinKB -and $finalSize -le $targetMaxKB) {
                Write-Host " -> $($finalSize)KB (Q:$bestFile) OK" -ForegroundColor Green
            } elseif ($finalSize -lt $targetMinKB) {
                Write-Host " -> $($finalSize)KB (Q:$bestFile) Under target" -ForegroundColor Yellow
            } else {
                Write-Host " -> $($finalSize)KB (Q:$bestFile) Over target" -ForegroundColor Red
            }
            
            # Cleanup
            $graphics.Dispose()
            $resized.Dispose()
            $image.Dispose()
            $encoderParams.Dispose()
            
        } catch {
            Write-Host " -> ERROR: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    Write-Host ""
}

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  Compression Complete!" -ForegroundColor Cyan
Write-Host "  Output: $outputFolder" -ForegroundColor Cyan

# Show summary
$outputFiles = Get-ChildItem -Path $outputFolder -Filter "*.jpg" -ErrorAction SilentlyContinue
if ($outputFiles) {
    $totalOutputSize = ($outputFiles | Measure-Object -Property Length -Sum).Sum
    $avgSize = [math]::Round(($totalOutputSize / $outputFiles.Count) / 1KB, 1)
    Write-Host "  Files: $($outputFiles.Count)" -ForegroundColor Cyan
    Write-Host "  Total size: $([math]::Round($totalOutputSize / 1MB, 1)) MB" -ForegroundColor Cyan
    Write-Host "  Average size: $($avgSize) KB" -ForegroundColor Cyan
}
Write-Host "======================================" -ForegroundColor Cyan

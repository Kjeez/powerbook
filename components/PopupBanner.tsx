"use client";
import { useEffect, useRef, useState } from "react";

export default function PopupBanner() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 280);
  };

  useEffect(() => {
    timerRef.current = setTimeout(close, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`pb-overlay${closing ? " pb-closing" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={`pb-modal${closing ? " pb-closing" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Welcome popup"
      >
        {/* Close button — top left */}
        <button
          className="pb-close"
          onClick={close}
          aria-label="Close popup"
          title="Close"
        >
          <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/powerbook_popup.jpeg"
          alt="Power Book — welcome offer"
          className="pb-img"
          fetchPriority="high"
          decoding="sync"
        />

        {/* Auto-close progress bar */}
        <div className="pb-progress" />

        {/* CTA */}
        <div className="pb-footer">
          <button className="pb-cta" onClick={close}>
            Continue to site &rarr;
          </button>
        </div>
      </div>

      <style>{`
        /* ---------- Popup Overlay ---------- */
        .pb-overlay{
          position:fixed;inset:0;z-index:9998;
          background:rgba(10,10,14,.68);
          backdrop-filter:blur(3px);
          -webkit-backdrop-filter:blur(3px);
          animation:pb-fade-in .22s ease both;
        }
        .pb-overlay.pb-closing{animation:pb-fade-out .28s ease forwards}

        /* ---------- Popup Modal ---------- */
        .pb-modal{
          position:fixed;z-index:9999;
          top:50%;left:50%;
          transform:translate(-50%,-50%);
          background:#fff;
          border-radius:18px;
          overflow:hidden;
          box-shadow:0 32px 80px -20px rgba(0,0,0,.48),0 0 0 1px rgba(255,255,255,.08);
          width:min(540px,92vw);
          max-height:95vh;
          display:flex;flex-direction:column;
          animation:pb-zoom-in .26s cubic-bezier(.2,.7,.2,1) both;
        }
        .pb-modal.pb-closing{animation:pb-zoom-out .28s cubic-bezier(.2,.7,.2,1) forwards}

        /* ---------- Close button ---------- */
        .pb-close{
          position:absolute;top:12px;left:12px;
          width:34px;height:34px;
          display:flex;align-items:center;justify-content:center;
          background:rgba(0,0,0,.55);
          border:1.5px solid rgba(255,255,255,.25);
          border-radius:50%;
          color:#fff;cursor:pointer;z-index:2;
          transition:background .18s,transform .18s;
          padding:0;
        }
        .pb-close svg{width:16px;height:16px;pointer-events:none}
        .pb-close:hover{background:rgba(239,67,67,.85);transform:scale(1.1)}

        /* ---------- Image ---------- */
        .pb-img{
          width:100%;
          height:auto;
          display:block;
          flex-shrink:1;
          min-height:0;
          object-fit:contain;
          object-position:top;
        }

        /* ---------- Progress bar ---------- */
        .pb-progress{
          height:3px;
          background:linear-gradient(90deg,#EF4343,#ff8c42);
          transform-origin:left;
          animation:pb-shrink 5s linear both;
        }

        /* ---------- Footer ---------- */
        .pb-footer{
          padding:16px 20px;
          display:flex;justify-content:center;
          background:#fff;
        }
        .pb-cta{
          display:inline-flex;align-items:center;gap:6px;
          padding:11px 28px;
          background:#EF4343;
          color:#fff;
          font-size:.95rem;font-weight:600;
          border-radius:999px;border:none;cursor:pointer;
          box-shadow:0 8px 22px -10px rgba(239,67,67,.7);
          transition:background .18s,transform .18s,box-shadow .18s;
          font-family:inherit;
        }
        .pb-cta:hover{
          background:#D63939;
          transform:translateY(-2px);
          box-shadow:0 12px 28px -10px rgba(239,67,67,.8);
        }
        .pb-cta:active{transform:translateY(0)}

        /* ---------- Keyframes ---------- */
        @keyframes pb-fade-in{from{opacity:0}to{opacity:1}}
        @keyframes pb-fade-out{from{opacity:1}to{opacity:0}}
        @keyframes pb-zoom-in{
          from{opacity:0;transform:translate(-50%,-50%) scale(.88)}
          to{opacity:1;transform:translate(-50%,-50%) scale(1)}
        }
        @keyframes pb-zoom-out{
          from{opacity:1;transform:translate(-50%,-50%) scale(1)}
          to{opacity:0;transform:translate(-50%,-50%) scale(.88)}
        }
        @keyframes pb-shrink{
          from{transform:scaleX(1)}
          to{transform:scaleX(0)}
        }
      `}</style>
    </>
  );
}

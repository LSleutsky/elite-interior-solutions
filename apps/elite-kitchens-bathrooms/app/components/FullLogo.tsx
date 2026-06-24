import { LogoLockup } from "@elite/ui/components/Logo";

export default function FullLogo({ className }: { className?: string } = {}) {
  return (
    <LogoLockup className={className} label="Elite Interior Renewals">
      <g
        className="fill-primary"
        fontFamily="Montserrat, system-ui, sans-serif"
        textAnchor="middle"
      >
        <text fontSize="88" fontWeight="600" letterSpacing="32" x="635" y="970">
          INTERIOR
        </text>
        <text fontSize="48" fontWeight="500" letterSpacing="22.5" x="643" y="1050">
          RENEWALS
        </text>
      </g>
    </LogoLockup>
  );
}

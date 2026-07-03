export default function BlobBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines bg-[size:56px_56px] opacity-30" />
      <div className="absolute -top-40 -left-32 h-[420px] w-[420px] animate-blob rounded-full bg-teal-glow/25 blur-[110px]" />
      <div className="absolute top-1/3 -right-32 h-[380px] w-[380px] animate-blob-slow rounded-full bg-sky-glow/20 blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] animate-blob rounded-full bg-indigo-500/10 blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/40 to-void" />
    </div>
  )
}

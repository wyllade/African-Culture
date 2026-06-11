export function Loader() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-stone-200 border-t-primary" />
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-stone-200 border-t-primary" />
    </div>
  )
}

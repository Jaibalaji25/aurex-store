function ProductSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/3">
      <div className="aspect-square animate-pulse bg-white/10" />

      <div className="space-y-4 p-5">
        <div className="h-3 w-20 animate-pulse rounded bg-white/10" />

        <div className="h-5 w-3/4 animate-pulse rounded bg-white/10" />

        <div className="h-4 w-16 animate-pulse rounded bg-white/10" />

        <div className="h-6 w-28 animate-pulse rounded bg-white/10" />

        <div className="h-11 w-full animate-pulse rounded-full bg-white/10" />
      </div>
    </div>
  );
}

export default ProductSkeleton;

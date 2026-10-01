function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-white"></div>

        <p className="text-sm text-gray-500">Loading AUREX...</p>
      </div>
    </div>
  );
}

export default Loading;

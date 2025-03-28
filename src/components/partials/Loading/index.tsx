const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex size-full h-screen w-screen items-center justify-center bg-card/75">
      <p className="text-5xl font-thin">L</p>
      <div className="mt-5 h-10 w-10 animate-spin rounded-full border-8 border-dashed border-primary" />
      <p className="text-5xl font-thin">ading...</p>
    </div>
  );
};

export default Loading;

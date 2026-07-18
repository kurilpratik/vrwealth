const PageLoader = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="loader">
        <div className="justify-content-center jimu-primary-loading"></div>
      </div>
      <p>This page is still in the upload queue</p>
    </div>
  );
};

export default PageLoader;

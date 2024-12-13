const Loading = () => {
  return (
    <>
      <div className="loading">
        <div className="container">
          <div className="loadingBox my-5 py-5">
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>

            {/* <p className="placeholder-glow">
              <span className="placeholder col-12"></span>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

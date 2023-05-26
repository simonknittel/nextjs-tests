const LoadedContent = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        <div className="bg-green-500 p-8">
          <p>LoadedContent</p>
        </div>
      );
    }, 2000);
  });
};

export default LoadedContent;

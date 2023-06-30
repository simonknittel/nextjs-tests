const AsyncContent = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        <div className="bg-green-500 p-8">
          <h2>AsyncContent</h2>
        </div>
      );
    }, 2000);
  });
};

export default AsyncContent;

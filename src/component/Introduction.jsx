const Introduction = ({ methodType, srcPath, description = null }) => {
  const isPahtArray = typeof srcPath === "object";
  return (
    <>
      <h3>
        This Sample Show How Can use Base Implement Link And Route With{" "}
        {methodType}.
      </h3>
      <hr />
      <h4>
        for See How Implement Please Open File With This{" "}
        {isPahtArray ? "Paths:" : "Path:"}{" "}
      </h4>
      {isPahtArray ? (
        srcPath.map((path, inex) => (
          <div key={inex}>
            <code>{path}</code>
          </div>
        ))
      ) : (
        <code>{srcPath}</code>
      )}
      <hr />
      {description ? (
        <>
          <h5>{description}</h5>
          <hr />
        </>
      ) : null}
    </>
  );
};

export default Introduction;

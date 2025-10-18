export const TestSSR = async () => {
  const data = await fetch('http://localhost:3000/api/hello').then((res) =>
    res.text()
  );

  return <div>Test SSR Component; data from /api/hello: {data}</div>;
};

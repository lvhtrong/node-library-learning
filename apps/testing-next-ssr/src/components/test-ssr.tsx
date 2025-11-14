export const TestSSR = async () => {
  const response = await new Promise<Response>((resolve) => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
        resolve(response),
      );
    }, 1000);
  });
  const data = await response.json();

  return (
    <div>
      Test SSR Component
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

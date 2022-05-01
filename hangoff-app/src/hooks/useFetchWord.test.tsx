import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { useFetchWord } from "./useFetchWord";
import vocabulary from "../../public/vocabulary.json";

test("fetches word with random seed consistency", async () => {
  jest.useFakeTimers().setSystemTime(new Date("2022-04-30"));
  global.fetch = jest.fn(
    () =>
      Promise.resolve({
        json: () => Promise.resolve(vocabulary),
      }) as any
  );
  const queryClient = new QueryClient();
  const wrapper = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  const { result, waitFor } = renderHook(() => useFetchWord(true), {
    wrapper,
  });
  await waitFor(() => result.current.isSuccess, { timeout: false });
  expect(result.current.data).toEqual("METAPHOR");
});

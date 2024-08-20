export type ActionResponseType<T = undefined> = {
  success?: boolean;
  message?: string;
  error?: string;
  data?: T;
};

export default function generateActionResponse({
  data,
  error,
  message,
  success = false,
}: ActionResponseType) {
  return {
    data,
    success,
    ...(error ? { error } : {}),
    ...(message ? { message } : {}),
  };
}

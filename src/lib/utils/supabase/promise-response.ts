type SupabasePromiseResponseProps<TDataType> = {
  data?: TDataType;
  error?: Error;
};

export default function supabasePromiseResponse<T>({
  data,
  error,
}: SupabasePromiseResponseProps<T>) {
  return data;
}

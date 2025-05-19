import { Button } from "./components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "./components/ui/form";
import { useForm } from "react-hook-form";
import EmptyState from "@/assets/empty-cart-512.webp";

function App() {
  const form = useForm({
    defaultValues: {
      path: "",
      arraySize: "5",
      algorithimn: "mergeSort",
    },
  });

  const onSubmit = (formData) => {
    console.log(formData);
    // bater no backend

    // Esperar a resposta

    // Exibir Gráficos
  };

  return (
    <main className="grid grid-cols-[400px_1fr] min-h-screen ">
      <Form {...form}>
        <form
          className="max-w-[670px] w-full flex flex-col gap-y-4 p-6 bg-gray-100"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <h1 className="text-black text-3xl">Algoritmos de Ordenação</h1>

          <FormField
            name="path"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel></FormLabel>
                <FormControl>
                  <input
                    {...field}
                    placeholder="Caminho do arquivo"
                    className="rounded-lg p-2 shadow-sm border border-slate-300 w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex gap-x-2 items-center">
            <FormField
              name="algorithimn"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Algoritmos</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Algoritmos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bubbleSort">Bubble Sort</SelectItem>
                        <SelectItem value="insertionSort">
                          Insert Sort
                        </SelectItem>
                        <SelectItem value="mergeSort">Merge Sort</SelectItem>
                        <SelectItem value="quickSort">Quick Sort</SelectItem>
                        <SelectItem value="stalinSort">Stalin Sort</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="arraySize"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Tamanho do array</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Tamanho do array" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="crescente">Crescente</SelectItem>
                        <SelectItem value="decrescente">Decrescente</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="mt-4 w-full">
            Enviar
          </Button>
        </form>
      </Form>
      <div className=" h-screen w-full flex items-center justify-center">
        <img src={EmptyState} alt="empty state" />
      </div>
    </main>
  );
}

export default App;

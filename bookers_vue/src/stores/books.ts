import { reactive, type InjectionKey } from "vue";

// const type of books data
type Book = {
  title: string;
  description: string;
};

export const books = (() => {
  // define new book data
  const newBook: Book = reactive<Book>({ title: "", description: "" });
  // define book data
  const Data: Array<Book> = reactive<Array<Book>>([
    { title: "test title", description: "test description" },
    { title: "test title", description: "test description" },
  ]);

  // define add action
  const addBook = (data: Book) => {
    console.log("value insert action start...");
    const newData = {
      title: data.title,
      description: data.description,
    };

    Data.push(newData);
    data.title = "";
    data.description = "";

    console.log("insert action done....");
  };

  return { Data, addBook, newBook };
})();

type bookType = typeof books;
export const bookKey: InjectionKey<bookType> = Symbol("usebooks");

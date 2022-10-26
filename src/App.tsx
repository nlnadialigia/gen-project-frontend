import { ButtonSignIn } from "./components/ButtonSignIn";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex justify-center items-center">
      <div className="lg:w-[400px] ">
        <ButtonSignIn asChild>
          <a href="#">Enviar</a>
        </ButtonSignIn>
      </div>
    </div>
  );
}

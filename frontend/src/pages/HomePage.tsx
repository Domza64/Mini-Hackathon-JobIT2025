import { useUserData } from "../hooks/useUserData";

function Home() {
  const { userData } = useUserData();

  return (
    <main className="flex justify-center flex-grow flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">Dobrodošli, {userData?.name}!</h1>
      <div className="bg-red-200 p-4">
        Ovdje se prikazuje eventovi koji su uskoro za oovog usera
      </div>
      <div>
        <p>Guzva u menzi</p>
        <div>
          <div>diadora</div>
          <div>barbakani</div>
        </div>
      </div>
      <div>
        <div>nadolazece iz kalendarea</div>
        <div>nadolazeca dogadanja i rekreacije</div>
      </div>
    </main>
  );
}

export default Home;

export default function result() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full">
      <div className="text-2xl text-center mb-8">パンダがカフェで注文する料理は？</div>
        <div className="flex justify-between items-center">
          <div className="text-2xl">１位の回答</div>
          <div className="text-2xl">パンダ</div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-2xl">２位の回答</div>
          <div className="text-2xl">パンダ</div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-2xl">３位の回答</div>
          <div className="text-2xl">パンダ</div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <div className="text-2xl">あなたの順位</div>
          <div className="text-2xl">５位</div>
        </div>
      </div>
    </div>
  );
}
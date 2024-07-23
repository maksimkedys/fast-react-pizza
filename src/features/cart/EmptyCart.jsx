import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="text-l mt-3.5 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;

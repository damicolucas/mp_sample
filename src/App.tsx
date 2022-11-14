import React from "react";

function App() {
  async function configureMP() {
    //@ts-ignore
    const mp = new window.MercadoPago(
      "TEST-4873064602873388-102713-7ab173bbb77df600c62f568839a1bf0f-1222254886"
    );

    let mp_actions = Object.getPrototypeOf(mp);
    // Para poder acessar configurações como por exemplo a bricks
    // preciso acessar por meio do [[Prototype]] do obj
    // e a mesma coisa acontece para acessar o objeto para o bricksBuilder

    console.log("mp", mp); 
    console.log("mp_actions", mp_actions);

    const protoBricks = mp_actions.bricks();
    const bricksBuilder = Object.getPrototypeOf(protoBricks);

    const renderCardPaymentBrick = async (bricksBuilder: any) => {
      const settings = {
        initialization: {
          amount: 100, 
        },
        callbacks: {
          onReady: () => {},
          onSubmit: (cardFormData: any) => {},
          onError: (error: any) => {},
        },
      };
      console.log("bricksBuilder", bricksBuilder);
      const cardPaymentBrickController = await bricksBuilder.create(
        "cardPayment",
        "cardPaymentBrick_container",
        settings
      );

      //quando chamo o bricksBuilder passando o .create ou outros métodos recebo 
      //o seguinte erro provavelmente por conta de precisar acessar o prototype
      //Uncaught (in promise) TypeError: attempted to get private field on non-instance
    };
    renderCardPaymentBrick(bricksBuilder);
  }

  React.useEffect(() => {
    configureMP();
  }, []);

  return <div className="cardPaymentBrick_container" />;
}

export default App;

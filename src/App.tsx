import React from "react";

function App() {

  const configureMP = React.useCallback(async () => {
    //@ts-ignore
    const mp = new window.MercadoPago(
      "TEST-b0cb2d07-764c-4ce4-b2ae-104c273ddbe8"
    );
    const bricksBuilder = mp.bricks();

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
      //@ts-ignore
      window.cardPaymentBrickController = await bricksBuilder.create(
        "cardPayment",
        "cardPaymentBrick_container",
        settings
      );

    };
    renderCardPaymentBrick(bricksBuilder);
  }, [])

  React.useEffect(() => {
    configureMP();
  }, []);

  return <div className="cardPaymentBrick_container" data-testid="brick-container" />;
}

export default App;

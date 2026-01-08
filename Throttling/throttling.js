function throttling(func, delay) {
    let isThrottled = false;

    return function (...args) {
        if (isThrottled) return;

        isThrottled = true;

        const button = document.getElementById("payBtn");
        button.disabled = true;

        func.apply(this, args);

        setTimeout(() => {
            isThrottled = false;
            button.disabled = false;
        }, delay);
    };
}

const paymentApi = () => {
    const input = document.getElementById("paymentInput");
    console.log("Payment:", input.value);
};

// apply throttling
const betterFunction = throttling(paymentApi, 500);

// attach click event AFTER DOM load
document.addEventListener("DOMContentLoaded", () => {
    document
      .getElementById("payBtn")
      .addEventListener("click", betterFunction);
});

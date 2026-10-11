# Pocketwise

A polished, interactive personal finance dashboard built for the Prompt Run competition. Pocketwise helps a Gen Z user plan a ₹10,000 budget across a 30-day month, with connected spending, commitments, savings, forecasts, and a decision simulator.

## Run it locally

1. Install Node.js (the current LTS release) from [nodejs.org](https://nodejs.org/).
2. Open a terminal in this `outputs` folder.
3. Run `npm install` once to install the app's dependencies.
4. Run `npm run dev` and open the local address printed in the terminal (usually `http://localhost:5173`).
5. To make a production build, run `npm run build`. The finished site will be in `dist/`.

## Try the interactions

- Use **Try it out** to enter a purchase and choose an amount. The preview updates remaining balance, daily allowance, and money mood.
- Choose **Add it to my month** to record the purchase and update the dashboard.
- Use **Add ₹500** on the savings goal to move money toward the goal and update your budget.
- Expand recent activity and use **Log an expense** to jump into the simulator.

The demo begins on day 12 of a sample month and keeps changes in memory for the current session. It does not connect to a bank or save data between page reloads.

## Competition submission

Submit the project folder/repository as your source, and include a deployed public link if the competition entry form requests a live demo. Before submission, run `npm run build` and confirm there are no errors. The production files are generated in `dist/`.

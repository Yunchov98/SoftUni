function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const textareaElement = document.querySelector('#inputs textarea');
      const text = JSON.parse(textareaElement.value);

      const output = {};
      let totalSalary = 0;
      let avgSalary = 0;
      let currentAvgSalary = 0;
      let bestRestourant = '';

      for (const line of text) {
         let [restName, workersInfo] = line.split(' - ');
         workersInfo = workersInfo.split(', ');

         for (const worker of workersInfo) {
            const [name, salary] = worker.split(' ');

            if (!output.hasOwnProperty(restName)) {
               output[restName] = {};
            }

            if (output.hasOwnProperty(restName)) {
               output[restName][name] = Number(salary);
            }
         }
      }

      const entries = Object.entries(output);

      for (const entry of entries) {
         const name = entry[0];
         const values = Object.entries(entry[1]);

         for (const [workerName, salary] of values) {
            totalSalary += salary;
         }

         avgSalary = totalSalary / values.length;

         if (avgSalary > currentAvgSalary) {
            currentAvgSalary = avgSalary;
            bestRestourant = name;
            totalSalary = 0;
         }
      }

      const sorted = Object.entries(output[bestRestourant]).sort((a, b) => b[1] - a[1]);
      let workersData = '';

      sorted.forEach(worker => {
         workersData += `Name: ${worker[0]} With Salary: ${worker[1]} `;
      });

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestourant} Average Salary: ${currentAvgSalary.toFixed(2)} Best Salary: ${(sorted[0][1]).toFixed(2)}`;
      document.querySelector('#workers p').textContent = workersData;
   }
}
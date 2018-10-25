function min_number(arr)
{
  var min=arr[0]
  for (var i=1; i<arr.length; i++)
  {
    if (arr[i]!=null && arr[i]!=undefined && arr[i]!=Infinity && !isNaN(arr[i]) && arr[i]!=-Infinity)
    {
      if (arr[i]<min)
      {
        min=arr[i]
      }
    }
  }
  return min;
}

function max_number(arr)
{
  var max=arr[0];
  for (var i=1; i<arr.length; i++)
  {
    if (arr[i]!=null && arr[i]!=undefined && arr[i]!=Infinity && !isNaN(arr[i]) && arr[i]!=-Infinity)
    {
      if (arr[i]>max)
      {
        max=arr[i];
      }
    }
  }
  return max;
}

function sum_number(arr)
{
  var sum=0;
  for (var i=0; i<arr.length; i++)
  {
    if (arr[i]!=null && arr[i]!=undefined && arr[i]!=Infinity && !isNaN(arr[i]) && arr[i]!=-Infinity)
    {
      sum+=arr[i];
    }
  }
  return sum;
}

var initial_array;

initial_array=[3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
console.log(`Minimal value of array [${initial_array}] is ${min_number(initial_array)}`);
console.log(`Maximal value of array [${initial_array}] is ${max_number(initial_array)}`);
console.log(`Sum of values of array [${initial_array}] is ${sum_number(initial_array)}`);
initial_array=[-1,-8,-2];
console.log(`Minimal value of array [${initial_array}] is ${min_number(initial_array)}`);
console.log(`Maximal value of array [${initial_array}] is ${max_number(initial_array)}`);
console.log(`Sum of values of array [${initial_array}] is ${sum_number(initial_array)}`);
initial_array=[1,7,3];
console.log(`Minimal value of array [${initial_array}] is ${min_number(initial_array)}`);
console.log(`Maximal value of array [${initial_array}] is ${max_number(initial_array)}`);
console.log(`Sum of values of array [${initial_array}] is ${sum_number(initial_array)}`);
initial_array=[1,undefined,3,5,-3];
console.log(`Minimal value of array [${initial_array}] is ${min_number(initial_array)}`);
console.log(`Maximal value of array [${initial_array}] is ${max_number(initial_array)}`);
console.log(`Sum of values of array [${initial_array}] is ${sum_number(initial_array)}`);
initial_array=[1,NaN,3,5,-3];
console.log(`Minimal value of array [${initial_array}] is ${min_number(initial_array)}`);
console.log(`Maximal value of array [${initial_array}] is ${max_number(initial_array)}`);
console.log(`Sum of values of array [${initial_array}] is ${sum_number(initial_array)}`);

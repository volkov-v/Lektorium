function min_number(arr){
  var min=arr[0]
  for (var i=1; i<arr.length; i++) {
    if (arr[i] != null && arr[i] != undefined && isFinite(arr[i])) {
      if (arr[i]<min) {
        min=arr[i]
      }
    }
  }
  return min;
}

function max_number(arr){
  var max=arr[0];
  for (var i=1; i<arr.length; i++) {
    if (arr[i] != null && arr[i] != undefined && isFinite(arr[i])) {
      if (arr[i]>max) {
        max=arr[i];
      }
    }
  }
  return max;
}

function sum_number(arr) {
  var sum=0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i] != null && arr[i] != undefined && isFinite(arr[i])) {
      sum+=arr[i];
    }
  }
  return sum;
}

function min_max_sum_array(function_name, arr) {
  var result;
  switch(function_name) {
    case 'min':
      result = min_number(arr);
      break;
    case 'max':
      result = max_number(arr);
      break;
    case 'sum':
      result = sum_number(arr);
      break;
  }
  return result;
}


initial_array=[3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
console.log(`Minimal value of array [${initial_array}] is ${min_max_sum_array('min', initial_array)}`);
initial_array=[-1,-8,-2];
console.log(`Maximal value of array [${initial_array}] is ${min_max_sum_array('max', initial_array)}`);
initial_array=[1,undefined,3,5,-3];
console.log(`Sum of values of array [${initial_array}] is ${min_max_sum_array('sum', initial_array)}`);

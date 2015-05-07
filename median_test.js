// median test

function medianScore(numGrad){
		var med;
		var ave = 0;

		console.log(numGrad);

		var numGrade = bubble(numGrad);

		console.log(numGrade);

		console.log(numGrade[numGrade.length / 2]);
		console.log(numGrade[(numGrade.length/2) -1]);

		if (numGrade.length%2 != 0)
			med = numGrade[Math.floor(numGrade.length/2)];
		else{
			var val1 = numGrade[numGrade.length / 2];
			var val2 = numGrade[(numGrade.length/2) -1];
			console.log(typeof val1);
			ave = (val1 + val2)/2;
			med = (numGrade[numGrade.length / 2] + numGrade[(numGrade.length/2) -1])/2;
		}
		return med;

		// [90, 95, 87, 60]
		// [60, 87, 90, 95]
	};

function bubble(arr){

		var temp;
		var comparCounter = 1;

		for (var j = 0; j < arr.length; j++)
		{
			for (var i = 0; i < arr.length-1-j; i++)
			{
				//console.log("comparCounter: " + comparCounter + " - " + arr);
				comparCounter++;

				if(arr[i+1])
				{
					if (arr[i] > arr[i+1])
					{
						temp = arr[i];
						arr[i] = arr[i+1];
						arr[i+1] = temp;
					}
				}
			}
		}

		//console.log("Done: "+arr);
		return arr;
	};

	console.log(medianScore([90, 95, 87, 60]));

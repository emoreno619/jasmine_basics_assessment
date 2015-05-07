var grader = (function() {

	return {

	letterGrader : function(numGrade){
		var rounded = Math.floor(numGrade);
		var letterGrade = 'NA';
		if (rounded >= 98)
			letterGrade = 'A+';
		else if (rounded >= 94)
			letterGrade = 'A';
		else if (rounded >= 90)
			letterGrade = 'A-';
		else if (rounded >= 88)
			letterGrade = 'B+';
		else if (rounded >= 84)
			letterGrade = 'B';
		else if (rounded >= 80)
			letterGrade = 'B-';
		else if (rounded >= 78)
			letterGrade = 'C+';
		else if (rounded >= 74)
			letterGrade = 'C';
		else if (rounded >= 70)
			letterGrade = 'C-';
		else if (rounded >= 68)
			letterGrade = 'D+';
		else if (rounded >= 64)
			letterGrade = 'D';
		else if (rounded >= 60)
			letterGrade = 'D-';
		else if (rounded < 60)
			letterGrade = 'F';
		return letterGrade;
	},

	averageScore : function(numGrade){
		var sum = 0;
		var ave = 0;
		for (var i = 0; i < numGrade.length; i++)
			sum += numGrade[i];
		return ave = sum/numGrade.length;
	},

	medianScore : function(numGrad){
		var med;

		var numGrade = grader.bubble(numGrad);

		if (numGrade.length%2 != 0)
			med = numGrade[Math.floor(numGrade.length/2)];
		else
			med = ( (numGrade[numGrade.length / 2] + numGrade[(numGrade.length/2) -1])/2);
		return med;
	},

	modeScore : function(numGrad){
		var modes = {};
		var result = [];

		var numGrade = grader.bubble(numGrad);

		// modes.push(numGrade[0]);
		for (var i = 0; i < numGrade.length; i++){
			if (!modes[numGrade[i]])
				modes[numGrade[i]] = 1;
			else
				modes[numGrade[i]] += 1;
		}
		var max = 0;
		for (mode in modes){
			if (modes[mode] > max)
				max = modes[mode];
		}
		for (mode in modes){
			if (modes[mode] == max)
				return parseFloat(mode);
				// result.push(parseFloat(mode));
		}

		// result = grader.bubble(result);

		// if (result.length == 1)
		// 	return result[0];
		// else
		// 	return result;
	},

	bubble : function(arr){

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
	}
	};
})();

module.exports = grader;
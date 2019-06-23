import * as Pipes from "./pipes";

// return number rounded to given digits
export const roundToDigits = (num, digits) =>
  Number(Math.round(num + "e" + digits) + "e-" + digits);

export const validateTemp = (temp, max, min) => {
  let validTemp = temp;
  if (temp > max) {
    validTemp = 150;
  } else if (temp < min) {
    validTemp = 1;
  }
  return validTemp;
};

//Return flow in m3/h (args flow in [dm3/s])
export const lpsToCmph = (flow) => roundToDigits(flow * 3.6, 2);

//Return flow in dm3/s (args flow in [m3/h])
export const cmphToLps = (flow) => roundToDigits(flow / 3.6, 2);

// Return water density in kg/m3 (args - temp [degC])
export const calcWaterDensity = (temp) =>
  (999.83952 +
    16.945176 * temp -
    7.9870401e-3 * temp * temp -
    46.170461e-6 * temp * temp * temp +
    105.56302e-9 * temp * temp * temp * temp -
    280.54253e-12 * temp * temp * temp * temp * temp) /
  (1 + 16.89785e-3 * temp);

//get Fluid density in kg/m3 depends on specificHeat and temp
export const getFluidDensity = (specificHeat, temp) => {
  let fluidDensity;
  if (specificHeat == 4.2) {
    fluidDensity = calcWaterDensity(temp);
  } else if (specificHeat == 3.63) {
    fluidDensity = 1052;
  } else if (specificHeat == 3.54) {
    fluidDensity = 1059;
  } else if (specificHeat == 3.77) {
    fluidDensity = 1034;
  } else if (specificHeat == 3.7) {
    fluidDensity = 1036;
  } else if (specificHeat == 1.005) {
    fluidDensity = 1.2;
  }
  return fluidDensity;
};

//returns water kin. viscosity in [mm2/s] args ([st C])
export const calcWaterKinVisc = (temp) => {
  let dynamicWaterVisc = 0.00179 / (1 + 0.0337 * temp + 0.000221 * temp * temp);
  return dynamicWaterVisc / calcWaterDensity(temp);
};

//returns glykol kin. viscosity in [mm2/s] args ([st C], [kJ/kh*K])
export const calcGlykolKinVisc = (temp, cp) => {
  let glykKinVisc;
  if (cp == 3.63) {
    if (temp >= 0 && temp < 20) {
      glykKinVisc = 4.6 - ((4.6 - 2.2) / 20) * temp;
    }
    if (temp >= 20 && temp < 40) {
      glykKinVisc = 2.2 - ((2.2 - 1.5) / 20) * (temp - 20);
    }
    if (temp >= 40 && temp < 60) {
      glykKinVisc = 1.5 - ((1.5 - 0.98) / 20) * (temp - 40);
    }
    if (temp >= 60 && temp < 80) {
      glykKinVisc = 0.98 - ((0.98 - 0.68) / 20) * (temp - 60);
    }
    if (temp >= 80 && temp < 101) {
      glykKinVisc = 0.68 - ((0.68 - 0.51) / 20) * (temp - 80);
    }
  }
  if (cp == 3.54) {
    if (temp >= 0 && temp < 20) {
      glykKinVisc = 6.5 - ((6.5 - 2.94) / 20) * temp;
    }
    if (temp >= 20 && temp < 50) {
      glykKinVisc = 2.94 - ((2.94 - 1.43) / 30) * (temp - 20);
    }
    if (temp >= 50 && temp < 101) {
      glykKinVisc = 1.43 - ((1.43 - 0.65) / 50) * (temp - 50);
    }
  }
  if (cp == 3.77) {
    if (temp >= 0 && temp < 20) {
      glykKinVisc = 12 - ((12 - 4.4) / 20) * temp;
    }
    if (temp >= 20 && temp < 40) {
      glykKinVisc = 4.4 - ((4.4 - 2.2) / 20) * (temp - 20);
    }
    if (temp >= 40 && temp < 60) {
      glykKinVisc = 2.2 - ((2.2 - 1.3) / 20) * (temp - 40);
    }
    if (temp >= 60 && temp < 80) {
      glykKinVisc = 1.3 - ((1.3 - 0.9) / 20) * (temp - 60);
    }
    if (temp >= 80 && temp < 101) {
      glykKinVisc = 0.9 - ((0.9 - 0.7) / 20) * (temp - 80);
    }
  }
  if (cp == 3.7) {
    if (temp >= 0 && temp < 20) {
      glykKinVisc = 14.3 - ((14.3 - 5.0) / 20) * temp;
    }
    if (temp >= 20 && temp < 40) {
      glykKinVisc = 5.0 - ((5.0 - 2.46) / 20) * (temp - 20);
    }
    if (temp >= 40 && temp < 60) {
      glykKinVisc = 2.46 - ((2.46 - 1.4) / 20) * (temp - 40);
    }
    if (temp >= 60 && temp < 80) {
      glykKinVisc = 1.4 - ((1.4 - 0.96) / 20) * (temp - 60);
    }
    if (temp >= 80 && temp < 101) {
      glykKinVisc = 0.96 - ((0.96 - 0.73) / 20) * (temp - 80);
    }
  }
  glykKinVisc /= 1000000;
  return glykKinVisc;
};

// returns Reynolds number w [-]  args ([m/s], [mm], [m2/s])
export const calcReynolds = (flowSpeed, diameter, kinVisc) =>
  (flowSpeed * (diameter / 1000)) / kinVisc;

// returns lambda in [-]  args ([mm], [-], [mm])
export const calcLambda = (pipeRoughness, reynolds, diameter) => {
  let lambd = 0.00001;
  let lambdaL;
  let lambdaR;
  let counter = 1;

  do {
    lambdaL = 1 / Math.sqrt(lambd);
    lambdaR =
      -2 *
      Math.log10(
        pipeRoughness / 1000 / (3.71 * (diameter / 1000)) +
          2.51 / (reynolds * Math.sqrt(lambd)),
      );
    lambd = lambd + 0.00001;
    if (counter == 55555555) {
      break;
    }
    counter++;
  } while (Math.abs(lambdaL - lambdaR) > 0.005);

  return lambd;
};

// return flowSpeed [m/s]  args ([m3/h], [mm])
export const calcFlowSpeed = (flow, diameter) => {
  let pipeArea = (Math.PI * (diameter / 1000) * (diameter / 1000)) / 4;
  return flow / 3600 / pipeArea;
};

// return flowSpeed [m/s]  args ([m3/h], [mm])
export const calcFlowSpeedRect = (flow, dimA, dimH) => {
  let Area = (dimA / 1000) * (dimH / 1000);
  return roundToDigits(flow / 3600 / Area, 2);
};

//calculate linear pressure drop [Pa/m] args([mm], [mm], [m3/h], [degC], [kJ/kg*K], true or false)
export const calcPressureDrop = (
  pipeRoughness,
  diameter,
  flow,
  temp,
  specificHeat,
  rounded = false,
) => {
  let flowSpeed = calcFlowSpeed(flow, diameter);
  let fluidDensity = getFluidDensity(specificHeat, temp);
  let fluidKinVisc;
  if (specificHeat == 4.2) {
    fluidKinVisc = calcWaterKinVisc(temp);
  } else if (specificHeat == 1.005) {
    fluidKinVisc = 17.0e-6;
  } else {
    fluidKinVisc = calcGlykolKinVisc(temp, specificHeat);
  }
  let reynolds = calcReynolds(flowSpeed, diameter, fluidKinVisc);
  let lambda = calcLambda(pipeRoughness, reynolds, diameter);
  let result =
    fluidDensity * (lambda / (diameter / 1000)) * ((flowSpeed * flowSpeed) / 2);
  return rounded ? roundToDigits(result, 2) : result;
};

//return flow in m3/h args (K, kW, Kj/kg*K, °C)
export const flowBasedOnPower = (deltaTemp, power, specificHeat, temp) =>
  (power / (deltaTemp * specificHeat) / (getFluidDensity(specificHeat, temp) / 1000)) *
  3.6;

//return power in kW args (K, m3/h, Kj/kg*K, °C)
export const powerBasedOnFlow = (deltaTemp, flow, specificHeat, temp) =>
  ((flow * 1000) / 3600) * getFluidDensity(specificHeat, temp) * specificHeat * deltaTemp;

// Making selection of pipe based on pressure drop.
// It returns proper pipe and then 2 smaller and 2 bigger pipes
// to see how it looks like. Returns Array of Objects.
export const calcArrayOfPressDrop = (
  acceptablePressureDrop = 160,
  pipeType,
  flow,
  temp,
  specificHeat,
  rounded = true,
) => {
  let results = [];
  let internalDiametersOfPipes = Pipes.arrayOfInternalDiameters(pipeType);
  let pipesLabels = Pipes.arrayOfLabelDiameters(pipeType);
  let arrayOfPressureDrops = internalDiametersOfPipes.map((diameter) => {
    return calcPressureDrop(pipeType, diameter, flow, temp, specificHeat, rounded);
  });
  let arrayOfSpeed = internalDiametersOfPipes.map((diameter) => {
    return roundToDigits(calcFlowSpeed(flow, diameter), 2);
  });

  let indexOfAcceptPressDrop = arrayOfPressureDrops.findIndex((drop) => {
    return drop < acceptablePressureDrop;
  });

  if (indexOfAcceptPressDrop == -1) {
    return false;
  } else {
    for (
      let index = indexOfAcceptPressDrop - 2;
      index < indexOfAcceptPressDrop + 3;
      index++
    ) {
      if (index < 0) {
        continue;
      }
      if (index >= arrayOfPressureDrops.length) {
        break;
      }
      results.push({
        diameter: pipesLabels[index],
        pressureDrop: arrayOfPressureDrops[index],
        speed: arrayOfSpeed[index],
        isAboveAcceptable: arrayOfPressureDrops[index] > acceptablePressureDrop,
      });
    }
    return results;
  }
};

// Making selection of duct based on speed.
// It returns proper duct and then 2 smaller and 2 bigger pipes
// to see how it looks like. Returns Array of Objects.
export const calcArrayOfPressDropAir = (
  maxSpeed = 5.5,
  flow,
  pipeRoughness = 0.15,
  pipes = Pipes.spiroPipes,
) => {
  let results = [];
  let arrayOfDucts = Object.values(pipes);
  let arrayOfDuctsLabels = Object.keys(pipes);
  let arrayOfSpeeds = arrayOfDucts.map((diameter) => {
    return roundToDigits(calcFlowSpeed(flow, diameter), 2);
  });
  let arrayOfPressureDrops = arrayOfDucts.map((diameter) => {
    return calcPressureDrop(pipeRoughness, diameter, flow, 20, 1.005, true);
  });
  let indexOfProperPipe = arrayOfSpeeds.findIndex((speed) => {
    return speed < maxSpeed;
  });

  if (indexOfProperPipe == -1) {
    return false;
  } else {
    for (let index = indexOfProperPipe - 2; index < indexOfProperPipe + 3; index++) {
      if (index < 0) {
        continue;
      }
      if (index >= arrayOfSpeeds.length) {
        break;
      }
      results.push({
        diameter: arrayOfDuctsLabels[index],
        pressureDrop: arrayOfPressureDrops[index],
        speed: arrayOfSpeeds[index],
        isAboveAcceptable: arrayOfSpeeds[index] > maxSpeed,
      });
    }
    return results;
  }
};

export const calcArrayOfPressDropGas = (
  flow,
  maxSpeed = 6,
  pipes = Pipes.steelPipesDiameters,
) => {
  let results = [];
  let arrayOfPipes = Object.values(pipes);
  let arrayOfPipesLabels = Object.keys(pipes);
  let arrayOfSpeeds = arrayOfPipes.map((diameter) => {
    return roundToDigits(calcFlowSpeed(flow, diameter), 2);
  });
  let arrayOfPressureDrops = arrayOfPipes.map((diameter) => {
    return calcGasPressureDrop(flow, diameter);
  });
  let indexOfProperPipe = arrayOfSpeeds.findIndex((speed) => {
    return speed < maxSpeed;
  });

  if (indexOfProperPipe == -1) {
    return false;
  } else {
    for (let index = indexOfProperPipe - 2; index < indexOfProperPipe + 3; index++) {
      if (index < 0) {
        continue;
      }
      if (index >= arrayOfSpeeds.length) {
        break;
      }
      results.push({
        diameter: arrayOfPipesLabels[index],
        pressureDrop: arrayOfPressureDrops[index],
        speed: arrayOfSpeeds[index],
        isAboveAcceptable: arrayOfSpeeds[index] > maxSpeed,
      });
    }
    return results;
  }
};

//returns pipe diameter depdens on maxSpeed (args [m/s], [m3/h], [Object])
export const getProperPipeDepOnMaxSpeed = (maxSpeed, flow, pipeType) => {
  let arrayOfPipes = Pipes.arrayOfInternalDiameters(pipeType);
  let arrayOfPipesLabels = Pipes.arrayOfLabelDiameters(pipeType);
  let arrayOfSpeeds = arrayOfPipes.map((diameter) => {
    return roundToDigits(calcFlowSpeed(flow, diameter), 2);
  });
  let indexOfProperPipe = arrayOfSpeeds.findIndex((speed) => {
    return speed < maxSpeed;
  });
  return [arrayOfPipesLabels[indexOfProperPipe], arrayOfSpeeds[indexOfProperPipe]];
};

//returns Pressure drop in Pa/m (args in [m3/h], [mm])
export const calcGasPressureDrop = (flow, diameter) => {
  let drop = 0.776457e-8 * 0.78 * (flow ** 1.82 / (diameter / 1000) ** 4.82);
  return roundToDigits(drop, 2);
};

//Return power in [kW] flow in [m3/h]
export const calcGasPower = (flow) => roundToDigits(flow / 0.115, 2);

// Return flow in [m3/h] flow in [kW]
export const calcGasFlow = (power) => roundToDigits(power * 0.115, 2);

export const sumOfQn = (basin, sink, rinser, tub, shower, wash, dish, urinal) => {
  return roundToDigits(
    basin * 0.07 +
      sink * 0.07 +
      rinser * 0.13 +
      tub * 0.15 +
      shower * 0.15 +
      wash * 0.25 +
      dish * 0.15 +
      urinal * 0.3,
    2,
  );
};

export const calcQbasenOnQn = (sumQn, typeOfBuilding) => {
  let calculatedQ;
  switch (typeOfBuilding) {
    case "1":
      if (sumQn <= 20) {
        calculatedQ = 0.682 * Math.pow(sumQn, 0.45) - 0.14;
      } else {
        calculatedQ = 1.7 * Math.pow(sumQn, 0.21) - 0.7;
      }
      break;
    case "2":
      if (sumQn <= 20) {
        calculatedQ = 0.682 * Math.pow(sumQn, 0.45) - 0.14;
      } else {
        calculatedQ = 0.4 * Math.pow(sumQn, 0.54) + 0.48;
      }
      break;
    case "3":
      if (sumQn <= 20) {
        calculatedQ = 0.698 * Math.pow(sumQn, 0.5) - 0.12;
      } else {
        calculatedQ = 1.08 * Math.pow(sumQn, 0.5) - 1.83;
      }
      break;
    case "4":
      if (sumQn <= 20) {
        calculatedQ = 0.698 * Math.pow(sumQn, 0.5) - 0.12;
      } else {
        calculatedQ = 4.3 * Math.pow(sumQn, 0.27) - 6.65;
      }
      break;
    case "5":
      if (sumQn <= 20) {
        calculatedQ = 0.698 * Math.pow(sumQn, 0.5) - 0.12;
      } else {
        calculatedQ = 0.25 * Math.pow(sumQn, 0.65) + 1.25;
      }
      break;
    case "6":
      if (sumQn <= 1.5) {
        calculatedQ = sumQn;
      } else if (sumQn > 1.5 && sumQn <= 20) {
        calculatedQ = 4.4 * Math.pow(sumQn, 0.27) - 3.41;
      } else {
        calculatedQ = -22.5 * Math.pow(sumQn, -0.5) + 11.5;
      }
      break;
  }

  if (calculatedQ > 0) {
    return roundToDigits(calculatedQ, 2);
  } else {
    return 0;
  }
};

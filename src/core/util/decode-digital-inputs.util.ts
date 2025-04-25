import { DIGITAL_INPUTS } from 'src/app/tcp/application/enums/code.enum'

export function decodeDigitalInputs(bytes) {
  const digitalInputs = bytes
  return {
    systemUse: !!(digitalInputs & DIGITAL_INPUTS.SYSTEM_USE),
    input1: !!(digitalInputs & DIGITAL_INPUTS.INPUT1),
    antennaShort: !!(digitalInputs & DIGITAL_INPUTS.ANTENNA_SHORT),
    antennaOpen: !!(digitalInputs & DIGITAL_INPUTS.ANTENNA_OPEN),
    input2: !!(digitalInputs & DIGITAL_INPUTS.INPUT2),
    input3: !!(digitalInputs & DIGITAL_INPUTS.INPUT3),
    input4: !!(digitalInputs & DIGITAL_INPUTS.INPUT4),
  }
}

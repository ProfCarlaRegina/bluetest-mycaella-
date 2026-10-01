bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let dados_recebidos = ""
    dados = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (dados_recebidos == "up") {
        robotbit.Servo(robotbit.Servos.S1, 90)
        robotbit.Servo(robotbit.Servos.S2, 120)
    } else if (dados_recebidos == "down") {
        robotbit.Servo(robotbit.Servos.S1, 90)
        robotbit.Servo(robotbit.Servos.S2, 30)
    } else if (dados_recebidos == "right") {
        robotbit.Servo(robotbit.Servos.S1, 120)
    } else if (dados_recebidos == "left") {
        robotbit.Servo(robotbit.Servos.S1, 30)
        robotbit.Servo(robotbit.Servos.S2, 90)
    } else if (dados_recebidos == "normal") {
        robotbit.Servo(robotbit.Servos.S1, 90)
        robotbit.Servo(robotbit.Servos.S2, 90)
    }
})
let dados = ""
bluetooth.startUartService()
basic.showIcon(IconNames.SmallSquare)

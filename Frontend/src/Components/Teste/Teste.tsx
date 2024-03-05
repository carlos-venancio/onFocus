import React, { useState, useEffect } from 'react';
import { Container, ViewOpUp, ViewOpDo, ButtonUp, ButtonDown, ViewText, NumberText, Horus, Mints, Entre, DateTime, DateTimeText, Button } from "../Timer/styles"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";




export default function Timer() {

  const time = new Date();


  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!time.getMinutes() && !time.getSeconds()) clearInterval(interval)
      time.setSeconds(time.getSeconds() - 1)
    }, 1000)    
  },[time])

  return (

    <Container >
      <DateTime>
        <Horus >
          <ViewOpUp>


          </ViewOpUp>

          <ViewText >
            <NumberText >{time.getMinutes()}</NumberText>
          </ViewText>

          <ViewOpDo

          >

          </ViewOpDo>
        </Horus>

      </DateTime>

      <Entre>:</Entre>
      <DateTime>
        <Mints>
          <ViewOpUp>


          </ViewOpUp>

          <ViewText >
            <NumberText>{time.getSeconds()}</NumberText>
          </ViewText>

          <ViewOpDo  >

          </ViewOpDo>
        </Mints>

      </DateTime>
    </Container>
  );
};
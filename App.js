/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Pressable,
  Modal,
  TextInput,
  Keyboard,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import * as fa from '@fortawesome/free-solid-svg-icons'
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './store';
import data from './data';


const App: () => React$Node = () => {

  const [numClicks, setNumClicks] = React.useState(0);
  const [fund, setFund] = React.useState(data.funds[0].fund);
  const [remainingFund, setRemainingFund] = React.useState(-12); //0=green circle; >0 = blue circle; <0=red circle
  const [isOverBudget, setIsOverBudget] = React.useState(false);
  const [trasactionModalVisible, setTrasactionModalVisible] = React.useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = React.useState(false);
  const [transferAllocationVisible, setTransferAllocationVisible] = React.useState(false);
  const [category, setCategory] = React.useState(0);
  const [categories, setCategories] = React.useState(data.categories);
  const [enteredValue, setEnteredValue] = React.useState("0");
  const [userData, setUserData] = React.useState(data);



  React.useEffect(() => {
    // storeData(data);
    // let fetchData = async () => {
    //   const myData = await getData('user-data');
    //   setCategories(myData.categories);
    //   console.log('user', myData);
    // };
    // fetchData();

    const unsubscribe = store.subscribe(() => { setUserData(store.getState()) });
    store.dispatch({ type: "dataInitialized", payload: { data: data } });
    unsubscribe()
  }, [])





  let currencySign = "";

  if (remainingFund > 0) {
    currencySign = "$"
  } else if (remainingFund < 0) {
    currencySign = "-$"
  } else {
    currencySign = ""
  }


  const handlePress = (category) => {
    console.log("Selected Category", category);
    setCategory(category);
    setTrasactionModalVisible(true);
  }

  const handleValueEntry = (action) => {


    if (action === "DEL") {
      let newValue = enteredValue.slice(0, -1);
      setEnteredValue(newValue);
    } else if (typeof (action) === "number" && action !== 0 && enteredValue === "0") {
      setEnteredValue(action.toString());
    } else {
      setEnteredValue(enteredValue + action);
    }

    console.log(enteredValue)
  }

  const handleTransaction = (category, amount) => {
    let newTransaction = {
      month: 102020,
      category: category,
      type: 'expense',
      amount: parseFloat(amount)
    }

    data.transactions.push(newTransaction);
    console.log(data.transactions);
  }

  const getTotalExpenses = (transactions) => {

    let totalExpenses = 0;

    for (let i = 0; i < transactions.length; i++) {
      totalExpenses += transactions[i].amount;
    }

    return totalExpenses;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, }}>
          {/* <Pressable onPress={() => setSettingsModalVisible(true)}><FontAwesomeIcon icon={fa.faCog} /></Pressable> */}
          <Text style={styles.header}>ZeroedSum</Text>

          <Pressable style={styles.fund}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "#33b5e5" }}>Balance: ${data.funds[0].fund - getTotalExpenses(data.transactions)}</Text>
            {/* <Text>{true && `${currencySign}`}{Math.abs(remainingFund)}</Text>
            {true && <Text>Over Budget</Text>} */}
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#e56333" }}>Total Expenses: ${getTotalExpenses(data.transactions)}</Text>
          </Pressable>

        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Header /> */}

          <View style={styles.body}>
            <Text style={{
              justifyContent: 'center',
              alignContent: 'center',
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 50,
              marginTop: 20
            }}>Money Available</Text>
            <Items list={categories} userData={data} action={handlePress} />


          </View>
        </ScrollView>



        <Modal
          presentationStyle="fullScreen"
          animationType="slide"
          // transparent={true}
          visible={trasactionModalVisible}
          onRequestClose={() => {
            setTrasactionModalVisible(false)
          }}

        >
          <View>
            <Text style={styles.header}>{data.categories.map(item => item.id === category ? item.categoryLabel.toLocaleUpperCase() : null)}  |   BAL: <AvailableMoney selectedCategory={category} /></Text>
            {/* <Pressable onPress={() => setTransferAllocationVisible(true)}><FontAwesomeIcon icon={fa.faCog} /></Pressable> */}

            {/* <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Available</Text>
              <Text><AvailableMoney selectedCategory={category} /></Text>
            </View> */}
          </View>

          <Pressable><Text style={{
            borderWidth: 2,
            borderColor: "steelblue",
            height: 40,
            color: "#e56333",
            fontSize: 30,
            fontWeight: "bold"
          }}> Deduct ${enteredValue}</Text></Pressable>

          <View style={styles.numPad} >
            <NumPad style={{ fontSize: 30, fontWeight: "bold" }} enterValue={handleValueEntry} />
            <Pressable style={styles.number} onPress={() => handleValueEntry("DEL")}><Text style={{ fontSize: 20, fontWeight: "bold" }}>DEL</Text></Pressable>
          </View>

          <View style={styles.modalButtons}>
            <Pressable
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setTrasactionModalVisible(!trasactionModalVisible);
                setEnteredValue("0")
              }}
            >
              <Text style={styles.safe}>Cancel</Text>
            </Pressable>
            <Pressable
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                handleTransaction(category, enteredValue);
                setEnteredValue("0")
                setTrasactionModalVisible(!trasactionModalVisible);
              }}
            >
              <Text style={styles.danger}>Deduct {data.categories.map(item => item.id === category ? item.categoryLabel.toLocaleUpperCase() : null)} Expense</Text>
            </Pressable>
          </View>
        </Modal>

        <Modal
          presentationStyle="fullScreen"
          animationType="slide"
          visible={transferAllocationVisible}
        >
          <View>
            <Text>Transfer Allocations</Text>
          </View>
          <View>
            <Pressable onPress={() => setTransferAllocationVisible(false)}><Text>Close</Text></Pressable>
          </View>
        </Modal>

        <Modal
          presentationStyle="fullScreen"
          animationType="slide"
          visible={settingsModalVisible}
        >
          <Text>October</Text>
          <View>
            <Text>Fund</Text>
            <TextInput
              style={{ height: 40, borderColor: 'steelblue', borderWidth: 1 }}
              keyboardType="number-pad"
            ></TextInput>
          </View>
          <View>
            <Text>Allocations</Text>
            <View>
              <Text>Fund</Text>
              <TextInput
                style={{ height: 40, borderColor: 'steelblue', borderWidth: 1 }}
                keyboardType="number-pad"
              ></TextInput>
            </View>
            <View>
              <Text>Fund</Text>
              <TextInput
                style={{ height: 40, borderColor: 'steelblue', borderWidth: 1 }}
                keyboardType="number-pad"
              ></TextInput>
            </View>
            <View>
              <Text>Fund</Text>
              <TextInput
                style={{ height: 40, borderColor: 'steelblue', borderWidth: 1 }}
                keyboardType="number-pad"
              ></TextInput>
            </View>
          </View>

          <Pressable onPress={() => setSettingsModalVisible(false)}><Text>Close</Text></Pressable>
        </Modal>

      </SafeAreaView>
    </>
  );

};

const AvailableMoney = ({ selectedCategory }) => {
  return <Text>$<RemainingMoney selectedCategory={selectedCategory} /> of ${data.allocations.map(allocation => { return allocation.category === selectedCategory ? allocation.allocation : null })}</Text>
}

const RemainingMoney = ({ selectedCategory }) => {

  let validExpenses = data.transactions.map(transaction => transaction.category === selectedCategory ? transaction.amount : null);

  let totalExpenses = (expenses) => {
    console.log("Expenses: ", expenses);
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      total += expenses[i]
    }
    return total;
  }

  let allocation = data.allocations.filter(allocation => allocation.category === selectedCategory);
  console.log("Allocation", allocation)
  let remainingMoney = allocation[0].allocation - totalExpenses(validExpenses);
  return <>{remainingMoney}</>
}

const Items = ({ list, userData, action }) => {
  console.log("user data 248", userData);
  let firstCategory = 0;
  let eighthCategory = 8;
  let groupNo = 1;

  let groups = [];

  let iterations = 0;
  if (list.length % 8 === 0) iterations = list.length / 8
  else iterations = list.length / 8 + 1;

  console.log("Iterations: ", iterations)

  for (let i = 0; i < iterations; i++) {
    let group = list.slice(firstCategory, eighthCategory);
    console.log(group)
    groups.push({ groupNo: groupNo, group: group });

    console.log(iterations)
    firstCategory += 8;
    eighthCategory += 8;
    groupNo += 1;
  }
  console.log(list)
  return groups.map((group) => <View key={group.groupNo} style={styles.categoryGroups}><Grouping group={group.group} userData={userData} action={action} /></View>);
}

const Grouping = ({ group, userData, action }) => group.map((item) =>
  <Pressable style={styles.category} onPress={() => { action(item.id) }} key={item.categoryLabel}>
    <FontAwesomeIcon size={32} style={{ backgroundColor: 'white' }} icon={item.iconLabel} />
    <Text><RemainingMoney selectedCategory={item.id} /></Text>
    {/* <Allocation category={item.id} userData={userData} /> */}
  </Pressable>);

const Allocation = ({ category, userData }) => {
  // console.log(userData.allocations);
  return data.allocations.map(allocation => {
    if (allocation.category === category) return <Text>${allocation.allocation}</Text>;
    // else return <Text>NAN</Text>;
  })
}

const NumPad = ({ enterValue }) => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];

  return numbers.map(number => <Pressable key={number} style={styles.number} onPress={() => enterValue(number)}><Text style={{ fontSize: 30, fontWeight: "bold" }}>{number}</Text></Pressable>);
}

const storeData = async (key, value) => {
  console.log("Trying to Store:", value);
  try {
    console.log('Trying')
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log('storage error', e)
  }
}

const getData = async (key) => {
  console.log("Trying to fetch", key)
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    console.log('Successfully fetched', jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Error fetching data", e);
  }
}


export default App;

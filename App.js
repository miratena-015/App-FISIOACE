import * as React from "react";
import { Provider as PaperProvider, Appbar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./pages/Home";
import Treinos from "./pages/Treinos";
import SOS from "./pages/SOS";
import SplashScreen from "./pages/SplashScreen";
import Blog from "./pages/Blog";
import Nós from "./pages/Nós";
import BlogAquecimento from "./pages/blogaquecimento";
import BlogAlongamento from "./pages/blogalongamento";
import BlogForca from "./pages/blogforca";
import BlogMobilidade from "./pages/blogmobilidade";
import BlogPropriocepcao from "./pages/blogpropriocepcao";
import MobilidadeList from "./pages/mobilidadeList";
import MobilidadeExercise from "./pages/mobilidadeExercise";
import AquecimentoList from "./pages/AquecimentoList";
import AquecimentoExercise from "./pages/AquecimentoExercise";
import ForcaPropriocepcaoList from "./pages/ForcaPropriocepcaoList";
import ForcaPropriocepcaoExercise from "./pages/ForcaPropriocepcaoExercise";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#1942ab" },
        tabBarActiveTintColor: "#e2ca80ff",
        tabBarInactiveTintColor: "#e0b336ff",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") iconName = "home";
          else if (route.name === "Treinos") iconName = "dumbbell";
          else if (route.name === "SOS") iconName = "alarm-light-outline";
          else if (route.name === "Blog")
            iconName = "newspaper-variant-outline";
          else if (route.name === "Nós") iconName = "account-group-outline";

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Treinos" component={Treinos} />
      <Tab.Screen name="SOS" component={SOS} />
      <Tab.Screen name="Blog" component={Blog} />
      <Tab.Screen name="Nós" component={Nós} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              header: () => (
                <Appbar.Header
                  style={{
                    backgroundColor: "#e8ba44",
                    justifyContent: "center",
                  }}
                >
                  <Appbar.Content
                    title="Fisioace"
                    titleStyle={{
                      color: "#1843a9",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  />
                </Appbar.Header>
              ),
            }}
          />

          {/* BLOG CATEGORIAS */}
          <Stack.Screen
            name="BlogAquecimento"
            component={BlogAquecimento}
            options={{
              title: "Aquecimento",
              headerTintColor: "#1843a9",
              headerStyle: { backgroundColor: "#e8ba44" },
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />

          <Stack.Screen
            name="BlogAlongamento"
            component={BlogAlongamento}
            options={{
              title: "Alongamento",
              headerTintColor: "#1843a9",
              headerStyle: { backgroundColor: "#e8ba44" },
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />

          <Stack.Screen
            name="BlogForca"
            component={BlogForca}
            options={{
              title: "Força",
              headerTintColor: "#1843a9",
              headerStyle: { backgroundColor: "#e8ba44" },
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />

          <Stack.Screen
            name="BlogPropriocepcao"
            component={BlogPropriocepcao}
            options={{
              title: "Propriocepção",
              headerTintColor: "#1843a9",
              headerStyle: { backgroundColor: "#e8ba44" },
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />

          <Stack.Screen
            name="BlogMobilidade"
            component={BlogMobilidade}
            options={{
              title: "Mobilidade",
              headerTintColor: "#1843a9",
              headerStyle: { backgroundColor: "#e8ba44" },
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />

          {/* LISTAS E EXERCICIOS */}
          <Stack.Screen
            name="MobilidadeList"
            component={MobilidadeList}
            options={{
              title: "Mobilidade",
              headerStyle: { backgroundColor: "#e8bb44" },
              headerTintColor: "#1843a9",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />

          <Stack.Screen
            name="MobilidadeExercise"
            component={MobilidadeExercise}
            options={{
              title: "Exercício",
              headerStyle: { backgroundColor: "#e8bb44" },
              headerTintColor: "#1843a9",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />

          <Stack.Screen
            name="AquecimentoList"
            component={AquecimentoList}
            options={{
              title: "Aquecimento",
              headerStyle: { backgroundColor: "#e8bb44" },
              headerTintColor: "#1843a9",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />

          <Stack.Screen
            name="AquecimentoExercise"
            component={AquecimentoExercise}
            options={{
              title: "Exercício",
              headerStyle: { backgroundColor: "#e8bb44" },
              headerTintColor: "#1843a9",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />

          <Stack.Screen
            name="ForcaPropriocepcaoList"
            component={ForcaPropriocepcaoList}
            options={{
              title: "Força e Propriocepção",
              headerStyle: { backgroundColor: "#e8bb44" },
              headerTintColor: "#1843a9",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />

          <Stack.Screen
            name="ForcaPropriocepcaoExercise"
            component={ForcaPropriocepcaoExercise}
            options={{
              title: "Exercício",
              headerStyle: { backgroundColor: "#e8bb44" },
              headerTintColor: "#1843a9",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
          <Stack.Screen
            name="Nós"
            component={Nós}
            options={{
              title: "Exercício",
              headerStyle: { backgroundColor: "#e8bb44" },
              headerTintColor: "#1843a9",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

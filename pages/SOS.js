import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

// ÍCONES do react-native-vector-icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BlogAquecimento() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.titulo}>
        SOS VÔLEI {"\n"}Prevenir e Socorrer Lesões
      </Text>

      <Text style={styles.subtitulo}>Como Prevenir Lesões:</Text>

      {/* 1 */}
      <View style={styles.item}>
        <View style={styles.linhaTitulo}>
          <Text style={styles.numero}>1. Cuidados constantes</Text>

          {/* ÍCONE NOVO */}
          <MaterialCommunityIcons
            name="medical-bag"
            size={20}
            color="#1843a9"
          />
        </View>

        <Text style={styles.bullet}>
          • Use tênis com bom amortecimento e solado firme.
        </Text>
        <Text style={styles.bullet}>
          • Evite jogar em superfície irregular ou escorregadia.
        </Text>
        <Text style={styles.bullet}>
          • Hidrate-se antes, durante e depois do jogo.
        </Text>

        <Image
          source={require("../assets/hidrata.jpg")}
          style={styles.imagem}
          resizeMode="cover"
        />
      </View>

      {/* 2 */}
      <View style={styles.item}>
        <View style={styles.linhaTitulo}>
          <Text style={styles.numero}>2. Atenção aos sinais do corpo</Text>

          {/* ÍCONE NOVO */}
          <FontAwesome5 name="exclamation-triangle" size={20} color="#1843a9" />
        </View>

        <Text style={styles.bullet}>
          • <Text style={styles.negrito}>Dor leve e passageira:</Text> observe e
          reduza o esforço.
        </Text>
        <Text style={styles.bullet}>
          • <Text style={styles.negrito}>Dor persistente:</Text> pare o jogo,
          aplique gelo e procure um profissional.
        </Text>
        <Text style={[styles.bullet, { marginTop: 6 }]}>
          Ignorar dor é o erro mais comum no vôlei.
        </Text>
      </View>

      <Text style={styles.subtitulo}>
        Socorro Rápido {"\n"}(durante ou após o jogo)
      </Text>

      {/* 1 - PRICE */}
      <View style={styles.item}>
        <Text style={styles.numero}>1. Entorse ou torção</Text>

        <Text style={styles.negrito}>SOS imediato: método PRICE</Text>

        <Text style={styles.bullet}>
          P – Proteção: evite novos traumas na região já machucada.
        </Text>
        <Text style={styles.bullet}>
          R – Repouso: pare o jogo e descanse em uma posição confortável.
        </Text>
        <Text style={styles.bullet}>
          I – Ice (gelo): aplique 15–20 min, a cada 2h nas primeiras 24h.
        </Text>
        <Text style={styles.bullet}>
          C – Compressão: enfaixe com faixa elástica, sem apertar demais.
        </Text>
        <Text style={styles.bullet}>
          E – Elevação: mantenha o membro elevado.
        </Text>

        <Text style={[styles.bullet, { marginTop: 6 }]}>
          Se houver inchaço intenso ou dor forte → procurar pronto atendimento.
        </Text>

        <Image
          source={require("../assets/gelo1.jpg")}
          style={styles.imagem}
          resizeMode="cover"
        />
      </View>

      {/* 2 */}
      <View style={styles.item}>
        <Text style={styles.numero}>2. Dor muscular ou cãibra</Text>

        <Text style={styles.bullet}>
          • Pare o esforço e alongue o músculo afetado.
        </Text>
        <Text style={styles.bullet}>• Beba água ou isotônico.</Text>
        <Text style={styles.bullet}>
          • Faça massagem leve e aplique calor morno se persistir.
        </Text>
        <Text style={[styles.bullet, { marginTop: 6 }]}>
          <Text style={styles.negrito}>Prevenção:</Text> boa hidratação e
          alimentação com potássio (banana, água de coco).
        </Text>

        <Image
          source={require("../assets/caimbra.jpg")}
          style={styles.imagem}
          resizeMode="cover"
        />
      </View>

      {/* 3 */}
      <View style={styles.item}>
        <Text style={styles.numero}>3. Impacto ou queda</Text>

        <Text style={styles.bullet}>• Aplique gelo imediato na área.</Text>
        <Text style={styles.bullet}>
          • Se houver hematoma, evite calor nas primeiras 48h.
        </Text>
        <Text style={styles.bullet}>• Mantenha repouso relativo.</Text>

        <Image
          source={require("../assets/gelo.jpg")}
          style={styles.imagem}
          resizeMode="cover"
        />
      </View>

      {/* 4 */}
      <View style={styles.item}>
        <Text style={styles.numero}>
          4. Dores no ombro{"\n"} (muito comum em saque e ataque)
        </Text>

        <Text style={styles.parenteses}>
          (frequente em movimentações repetitivas acima da cabeça)
        </Text>

        <Text style={styles.bullet}>• Pausa imediata.</Text>
        <Text style={styles.bullet}>• Compressa gelada por 15–20 min.</Text>
        <Text style={styles.bullet}>
          • Evite movimentos acima da cabeça até melhora.
        </Text>
        <Text style={[styles.bullet, { marginTop: 6 }]}>
          Se persistir, procure fisioterapeuta ou ortopedista.
        </Text>
      </View>

      {/* 5 */}
      <View style={styles.item}>
        <View style={styles.linhaTitulo}>
          <Text style={styles.numero}>5. Situações de emergência</Text>

          {/* ÍCONE NOVO */}
          <FontAwesome5 name="medkit" size={20} color="#1843a9" />
        </View>

        <Text style={styles.bullet}>
          • Queda com suspeita de fratura: imobilize e chame ambulância.
        </Text>
        <Text style={styles.bullet}>
          • Tontura, falta de ar, palpitação: interrompa o jogo e busque socorro
          médico.
        </Text>
      </View>

      <View style={styles.iconCentral}>
        <Text style={styles.emojiGrande}>🚑</Text>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6ff",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1843a9",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e8bb44",
    marginBottom: 8,
    marginTop: 10,
  },

  linhaTitulo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },

  item: {
    marginBottom: 14,
  },
  numero: {
    fontWeight: "bold",
    color: "#1843a9",
    fontSize: 16,
  },
  negrito: {
    fontWeight: "bold",
  },
  bullet: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    marginLeft: 4,
    marginTop: 4,
  },
  imagem: {
    width: "60%",
    height: 200,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "center",
  },
  parenteses: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
    marginTop: 4,
  },
  iconCentral: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 18,
  },
  emojiGrande: {
    fontSize: 60,
  },
});

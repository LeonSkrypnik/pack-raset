var packs_all = [
  // Пакеты с затратами 250 OR
  { "name": "Банановое повидло", "sell_price": 29, "labor": 250, "resources": [["овощи", 300], ["банан", 5]] },
  { "name": "Набивка для тюфяка", "sell_price": 30, "labor": 250, "resources": [["порошок", 300], ["гусиное перо", 10]] },
  { "name": "Хрустящие лепешки", "sell_price": 29, "labor": 250, "resources": [["злаки", 300], ["молоко", 5]] },
  { "name": "Ароматические подушечки", "sell_price": 26, "labor": 250, "resources": [["лепестки", 300], ["шерсть", 10]] },
  { "name": "Валеные припасы саванны", "sell_price": 37, "labor": 250, "resources": [["фарш", 300], ["моринаг", 3]] },
  { "name": "Пряности Харихалы", "sell_price": 41, "labor": 250, "resources": [["специи", 300], ["авокадо", 5]] },
  { "name": "Фруктовое печенье", "sell_price": 38, "labor": 250, "resources": [["сок", 300], ["молоко", 5]] },
  { "name": "Апельсиновый джем", "sell_price": 37, "labor": 250, "resources": [["овощи", 300], ["апельсин", 5]] },
  { "name": "Хазирские лечебные перины", "sell_price": 45, "labor": 250, "resources": [["порошок", 300], ["утиное перо", 10]] },
  { "name": "Маринованные яйца", "sell_price": 32, "labor": 250, "resources": [["специи", 300], ["яйца", 10]] },
  { "name": "Лекарственный сироп", "sell_price": 33, "labor": 250, "resources": [["порошок", 300], ["апельсин", 5]] },
  { "name": "Сушёные яблоки", "sell_price": 39, "labor": 250, "resources": [["специи", 300], ["яблоко", 5]] },
  // Пакеты с затратами 130 OR
  { "name": "Толченая куркума", "sell_price": 14, "labor": 130, "resources": [["лепестки", 180], ["куркума", 3]] },
  { "name": "Ароматная древесина Махадеби", "sell_price": 12, "labor": 130, "resources": [["сок", 180], ["инжир", 5]] },
  { "name": "Яблочные оладьи", "sell_price": 14, "labor": 130, "resources": [["злаки", 180], ["яблоко", 5]] },
  { "name": "Виноградный джем", "sell_price": 13, "labor": 130, "resources": [["овощи", 180], ["виноград", 5]] },
  { "name": "Смесь специй для сока", "sell_price": 16, "labor": 130, "resources": [["специи", 180], ["гранат", 3]] },
  { "name": "Трепкий вишневый сок", "sell_price": 11, "labor": 130, "resources": [["лепестки", 180], ["вишня", 2]] },
  { "name": "Мятные леденцы", "sell_price": 17, "labor": 130, "resources": [["порошок", 200], ["мята", 6]] },
  { "name": "Сладкий картофель", "sell_price": 19, "labor": 130, "resources": [["сок", 200], ["картофель", 15]] },
  { "name": "Сушёные яблочные дольки", "sell_price": 17, "labor": 130, "resources": [["овощи", 200], ["яблоко", 5]] },
  { "name": "Оливковое масло", "sell_price": 17, "labor": 130, "resources": [["специи", 180], ["оливки", 3]] },
  { "name": "Вяленые припасы Хазиры", "sell_price": 20, "labor": 130, "resources": [["фарш", 200], ["лилия", 5]] },
  { "name": "Лавандовый чай", "sell_price": 16, "labor": 130, "resources": [["сок", 180], ["лаванда", 15]] },
  { "name": "Душистый лосьон", "sell_price": 18, "labor": 130, "resources": [["порошок", 200], ["азалия", 15]] },
  { "name": "Крем с экстрактом бамбука", "sell_price": 12, "labor": 130, "resources": [["ремесленный молоток", 2]] },
  { "name": "Пальмовое масло", "sell_price": 11, "labor": 130, "resources": [["ремесленный молоток", 2]] },
  // Пакеты с затратами 140 OR
  { "name": "Компост", "sell_price": 15, "labor": 140, "resources": [["лепестки", 150], ["морковка", 15]] },
  { "name": "Фаршированный помидор", "sell_price": 14, "labor": 140, "resources": [["фарш", 150], ["помидор", 15]] },
  { "name": "Чесночные приправы", "sell_price": 17, "labor": 140, "resources": [["порошок", 150], ["чеснок", 15]] },
  { "name": "Рисовая лапша", "sell_price": 12, "labor": 140, "resources": [["овощи", 150], ["рис", 15]] },
  { "name": "Настойка алоэ", "sell_price": 18, "labor": 140, "resources": [["овощи", 160], ["алоэ", 5]] },
  { "name": "Вяленые припасы Харихалы", "sell_price": 20, "labor": 140, "resources": [["фарш", 160], ["арахис", 5]] },
  { "name": "Просяная мука", "sell_price": 19, "labor": 140, "resources": [["лепестки", 160], ["просо", 5]] },
  { "name": "Букеты роз", "sell_price": 18, "labor": 140, "resources": [["злаки", 150], ["роза", 15]] },
  { "name": "Ароматный чай", "sell_price": 22, "labor": 140, "resources": [["сок", 160], ["василёк", 5]] },
  { "name": "Мятные рогалики", "sell_price": 17, "labor": 140, "resources": [["злаки", 150], ["мята", 5]] },
  { "name": "Оладьи из батата", "sell_price": 19, "labor": 140, "resources": [["лепестки", 160], ["батат", 5]] }
];

var default_resource_prices = {
  "овощи": 0.03,
  "банан": 0.05,
  "порошок": 0.03,
  "гусиное перо": 0.04,
  "злаки": 0.04,
  "молоко": 0.03,
  "лепестки": 0.05,
  "шерсть": 0.03,
  "фарш": 0.03,
  "моринаг": 0.03,
  "специи": 0.03,
  "авокадо": 0.08,
  "сок": 0.04,
  "апельсин": 0.2,
  "утиное перо": 0.05,
  "яйца": 0.04,
  "яблоко": 0.04,
  "куркума": 0.23,
  "инжир": 0.05,
  "виноград": 0.02,
  "гранат": 0.51,
  "вишня": 0.25,
  "мята": 0.24,
  "картофель": 0.04,
  "лаванда": 0.04,
  "азалия": 0.04,
  "ремесленный молоток": 1.0,
  "морковка": 0.05,
  "помидор": 0.02,
  "чеснок": 0.05,
  "рис": 0.02,
  "алоэ": 0.19,
  "арахис": 0.2,
  "просо": 0.02,
  "роза": 0.1,
  "василёк": 0.12,
  "батат": 0.07,
};

// Собираем список уникальных регов
var unique_resources = [];
(function() {
  var resSet = new Set();
  packs_all.forEach(function(pack) {
    pack.resources.forEach(function(resPair) {
      resSet.add(resPair[0]);
    });
  });
  unique_resources = Array.from(resSet).sort();
})();

function initForms() {
  var packsForm = document.getElementById("packsForm");
  packs_all.forEach(function(pack, index) {
    var div = document.createElement("div");
    div.innerHTML = '<label>' + pack.name + ':</label> <input type="text" id="pack_' + index + '" value="' + pack.sell_price + '">';
    packsForm.appendChild(div);
  });

  var resourcesForm = document.getElementById("resourcesForm");
  unique_resources.forEach(function(res) {
    var defaultPrice = default_resource_prices[res] || 0;
    var div = document.createElement("div");
    div.innerHTML = '<label>' + res + ':</label> <input type="text" id="resource_' + res + '" value="' + defaultPrice + '">';
    resourcesForm.appendChild(div);
  });
}

function showTab(tabId) {
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  document.getElementById(tabId).classList.add("active");
}

function calculate() {
  // Обновляем цены паков
  packs_all.forEach(function(pack, index) {
    var input = document.getElementById("pack_" + index);
    pack.sell_price = parseFloat(input.value);
  });

  // Обновляем цены регов
  var resource_prices = {};
  unique_resources.forEach(function(res) {
    var input = document.getElementById("resource_" + res);
    resource_prices[res] = parseFloat(input.value);
  });

  var results = [];
  var results_130 = [];
  var results_140 = [];
  var results_250 = [];

  packs_all.forEach(function(pack) {
    var sell_price = pack.sell_price;
    var labor_cost = pack.labor;
    var total_resource_cost = 0;
    pack.resources.forEach(function(resourcePair) {
      var resName = resourcePair[0];
      var qty = resourcePair[1];
      var price = resource_prices[resName] || 0;
      total_resource_cost += qty * price;
    });
    var profit = sell_price - total_resource_cost;
    var efficiency = profit > 0 ? labor_cost / profit : Infinity;
    var pack_result = {
      name: pack.name,
      sell_price: sell_price,
      labor: labor_cost,
      resource_cost: total_resource_cost,
      profit: profit,
      efficiency: efficiency
    };
    results.push(pack_result);
    if (labor_cost === 130) {
      results_130.push(pack_result);
    } else if (labor_cost === 140) {
      results_140.push(pack_result);
    } else if (labor_cost === 250) {
      results_250.push(pack_result);
    }
  });

  results.sort(function(a, b) {
    return a.efficiency - b.efficiency;
  });
  results_130.sort(function(a, b) {
    return a.efficiency - b.efficiency;
  });
  results_140.sort(function(a, b) {
    return a.efficiency - b.efficiency;
  });
  results_250.sort(function(a, b) {
    return a.efficiency - b.efficiency;
  });

  var top5_all = results.slice(0, 
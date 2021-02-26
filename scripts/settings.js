Hooks.once("init", () => {
	game.settings.register("cozy-player", "sheetsActionOnRoll", {
		  name: "Чарник: Действия при броске",
	  hint: "Сворачивает или закрывает чарник, когда пользователь нажимает на что-то, что вызывает бросок",
		  scope: "client",
		  config: true,
		  default: "minimize",
		  type: String,
		  choices: {
		"none": "Ничего",
		"minimize": "Свернуть Чарник",
		"close": "Закрыть Чарник"
		  }
	  });

  game.settings.register("cozy-player", "toolbarShowSkills", {
		name: "Левая панель инструментов: Показать навыки",
    hint: "Добавляет кнопки на левую панель инструментов для прокрутки Внимания, Проницательсности и Расследования",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
  
  game.settings.register("cozy-player", "toolbarTurnTools", {
		name: "Левая панель инструментов: Броски боя",
    hint: "Добавляет кнопки на левую панель инструментов для броска инициативы и завершения боя",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
  
  game.settings.register("cozy-player", "toolbarTargetTools", {
		name: "Левая панель инструментов: Цели для чата",
    hint: "Добавляет кнопку для отправки текущих целевых выборок в чат. Позволяет другим игрокам также выбирать их.",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});

  game.settings.register("cozy-player", "toolbarSetHP", {
		name: "Левая панель инструментов: Установить HP и временн. HP",
    hint: "Добавляет кнопку для изменения НР одного или нескольких токенов и для временных HP.",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});

  // chatActorTokenIntegration
  game.settings.register("cozy-player", "chatIntegrationHover", {
		name: "Интеграция В Чат: При Наведении",
    hint: "Имитирует парение над токеном при наведении на имя токена в чате.",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
  
  game.settings.register("cozy-player", "chatIntegrationClick", {
		name: "Интеграция чата: Нажать на кнопку",
    hint: "Имитирует выбор токена при нажатии на имя токена в чате.",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
  
  game.settings.register("cozy-player", "targetsSendToChat", {
		name: "Цели: Добавить в чат",
    hint: "В некоторых ситуациях прикрепляйте текущие цели к сообщению чата. ВНИМАНИЕ! Неявный режим имеет больший хит производительности, но более совместим с модулем better rolls.",
		scope: "world",
		config: true,
		default: "explicit",
		type: String,
		choices: {
      "none": "Никогда",
      "explicit": "На явных бросках",
      "implicit": "На неявных бросках",
      "all": "На любое сообщение"
		}
	});
  
  game.settings.register("cozy-player", "targetsClearOnRoll", {
		name: "Цели: очистить при прикреплении",
    hint: "Отменяет выбор всех целей при прикреплении их к сообщению.",
		scope: "client",
		config: true,
		default: true,
		type: Boolean
	});
  
  game.settings.register("cozy-player", "targetsClearOnTurnEnd", {
		name: "Цели: очистить в конце хода",
    hint: "Отменяет выбор всех целей при прохождении вашего хода.",
		scope: "client",
		config: true,
		default: true,
		type: Boolean
	});
  
	game.settings.register("cozy-player", "tooltipVisibility", {
		name: "Подсказка токена: глобальная видимость",
		hint: "Этот параметр определяет, на каких токенах отображать всплывающую подсказку при наведении курсора для игроков. Всплывающая подсказка всегда отображается для GM. Каждый игрок может дополнительно ограничить видимость, если захочет (следующая пара настроек).",
		scope: "world",
		config: true,
		default: "owned",
		type: String,
		choices: {
      "all": "Все токены",
      "observed": "Наблюдаемые токены",
      "friendly": "Дружественные токены",
      "ally": "Дружественные или наблюдаемые токены",
      "owned": "Собственные токены",
			"gm": "Только для ГМ",
      "disabled": "Отключено"
		}
	});
  
	game.settings.register("cozy-player", "tooltipOwnedVisibility", {
		name: "Подсказка токена: собственная информация",
		hint: "Опция игрока: Сколько всплывающих подсказок будет отображаться для принадлежащих токенов. Установка этого параметра в положение ограничено или отключено повысит производительность на бюджетных устройствах.",
		scope: "client",
		config: true,
		default: "ful",
		type: String,
		choices: {
      "non": "Отключить подсказку",
      "lim": "Ограниченная подсказка",
      "ful": "Вся информация"
		}
	});
  
	game.settings.register("cozy-player", "tooltipNotOwnedVisibility", {
		name: "Подсказка токена: другая информация",
		hint: "Опция игрока: Сколько всплывающих подсказок будет отображаться для НЕ принадлежащих токенов. Установка этого параметра в положение ограничено или отключено повысит производительность на бюджетных устройствах.ens.",
		scope: "client",
		config: true,
		default: "ful",
		type: String,
		choices: {
      "non": "Отключить подсказку",
      "lim": "Ограниченная информация",
      "ful": "Вся информация"
		}
	});
  
	game.settings.register("cozy-player", "tooltipStyle", {
		name: "Подсказка токена: стиль",
		scope: "client",
		config: true,
		default: "white",
		type: String,
		choices: {
      "black": "Чёрный",
      "white": "Белый"
		}
	});
  
	game.settings.register("cozy-player", "tooltipScale", {
		name: "Подсказка токена: шкала",
		hint: "Размер всплывающей подсказки",
		scope: "client",
		config: true,
		default: 1.0,
    type: Number,
    range: {min: 0.6, max: 2.0, step: 0.2}
	});
  
	game.settings.register("cozy-player", "tooltipDelay", {
		name: "Подсказка токена: Задержка",
		hint: "Задержка (в миллисекундах) между наведением курсора на объект и отображением всплывающей подсказки. Установка этого значения больше 0 может помочь избежать 'наводнения всплывающей подсказки'",
		scope: "world",
		config: true,
		default: 200,
    type: Number,
    range: {min: 0, max: 2000, step: 200}
	});
  
	game.settings.register("cozy-player", "tooltipMaxItems", {
		name: "Подсказка Токена: Максимальное кол-во элементов",
		hint: "Максимальное количество информации, отображаемой во всплывающей подсказке.",
		scope: "client",
		config: true,
		default: 21,
    type: Number,
    range: {min: 1, max: 40, step: 1}
	});
  
	game.settings.register("cozy-player", "tooltipMaxRows", {
		name: "Подсказка токена: Максимальное кол-во строк",
		hint: "Максимальное количество строк информации. Если это число меньше количества элементов, создается новый столбец.",
		scope: "world",
		config: true,
		default: 7,
    type: Number,
    range: {min: 1, max: 20, step: 1}
	});
  
  game.settings.register("cozy-player", "tooltipShowIcons", {
		name: "Подсказка Токена: Показать значки",
    hint: "Если значок не может быть найден, будет использовано имя функции.",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
  
	game.settings.register("cozy-player", "tooltipShowName", {
		name: "Подсказка токена: Имя актера",
		scope: "world",
		config: true,
		default: "token",
		type: String,
		choices: {
      "no": "Не показывать",
      "token": "Показать имя токена",
      "actor": "Показать имя актёра"
		}
	});
  
	game.settings.register("cozy-player", "tooltipShowHP", {
		name: "Подсказка токена: Показать Хит-Пойнты",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
 
	game.settings.register("cozy-player", "tooltipShowAC", {
		name: "Подсказка токена: Показать класс Брони",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	}); 
  
	game.settings.register("cozy-player", "tooltipShowSpeed", {
		name: "Подсказка токена: Показать скорость",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	}); 
  
	game.settings.register("cozy-player", "tooltipPassivePerception", {
		name: "Подсказка токена: Показать Пассивное Внимание",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	}); 
  
	game.settings.register("cozy-player", "tooltipPassiveInsight", {
		name: "Подсказка токена: Показать Пассивную Проницательность",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	}); 
  
	game.settings.register("cozy-player", "tooltipPassiveInvestigation", {
		name: "Подсказка токена: Показать Пассивное Расследование",
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	}); 
  
	game.settings.register("cozy-player", "tooltipResources", {
		name: "Подсказка токена: Показать ресурсы актера",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	}); 
  
	game.settings.register("cozy-player", "tooltipFeats", {
		name: "Подсказка токена: Показать черты",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	}); 
  
	game.settings.register("cozy-player", "tooltipConsumables", {
		name: "Подсказка токена: Показать расходные материалы",
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});
  
	game.settings.register("cozy-player", "tooltipFavs", {
		name: "Подсказка токена: Показать избранное Tidy5esheet",
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	}); 
  
	game.settings.register("cozy-player", "tooltipCaseByCase", {
		name: "Подсказка токена: в каждом конкретном случае",
    hint: "Каждый элемент имеет свои собственные настройки отображения всплывающей подсказки по адресу: edit item -> description -> tooltip display",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	}); 
  
	game.settings.register("cozy-player", "tooltipSpellSlots", {
		name: "Подсказка токена: Показать слоты заклинаний",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	}); 
  
	game.settings.register("cozy-player", "tooltipSpellSlotsIgnore", {
		name: "Подсказка токена: Не показывать слоты",
		hint: "Не показывать ячейки заклинаний, если это максимальное значение ячейки. Эта опция существует только как обходной путь для листов, которые не позволяют вам установить максимальное значение слота заклинания равным нулю.",
		scope: "world",
		config: true,
		default: 9,
    type: Number,
    //range: {min: 0.6, max: 2.0, step: 0.2}
	});
  
	game.settings.register("cozy-player", "hotkeySwitchSelectTarget", {
		name: "Горячая клавиша q для выбора переключателя",
		hint: "Нажатие клавиши «q» будет переключать между инструментами «выбор» и «цель».",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
  
	game.settings.register("cozy-player", "hotkeyHidePlayersList", {
		name: "Горячая клавиша 'p': скрыть список игроков",
		hint: "Нажатие 'p' скрыть / показать нижний левый список игроков",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
  
});
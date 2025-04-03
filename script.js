function checkEnvironment() {
    try {
        // More detailed environment checks
        if (!document) {
            console.error('Document object not available');
            return false;
        }
        if (!window) {
            console.error('Window object not available');
            return false;
        }
        if (!document.getElementsByClassName) {
            console.error('DOM methods not available');
            return false;
        }
        return true;
    } catch (error) {
        console.error('Environment not ready:', error.message);
        return false;
    }
}

function showContent(section) {
    if (!checkEnvironment()) {
        console.error('Environment not properly initialized');
        return;
    }
    
    // Hide all sections
    const sections = document.getElementsByClassName('content-section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    
    // Show selected section
    document.getElementById(section).style.display = 'block';
}

// Show Character 1 by default and initialize tables
window.onload = function() {
    showContent('characters');
    selectCharacter('character1');
    
    // Initialize tables for both characters
    updateNormalAttackTable('character1');
    updateSkillTable('character1');
    updateToolTable('character1');
    
    updateNormalAttackTable('character2');
    updateSkillTable('character2');
    updateToolTable('character2');
};

function showSubContent(subSection) {
    // Add functionality for sub-content navigation if needed
    console.log(`Showing sub-section: ${subSection}`);
}

function selectCharacter(characterId) {
    // Hide all character cards
    const characterCards = document.getElementsByClassName('character-card');
    for (let i = 0; i < characterCards.length; i++) {
        characterCards[i].style.display = 'none';
    }
    
    // Show selected character card
    document.getElementById(characterId).style.display = 'block';
}

function updateNormalAttackTable(characterId) {
    const normalAttackSlider = document.getElementById(`normal-attack-slider-${characterId}`);
    const normalAttackLevelDisplay = document.getElementById(`normal-attack-level-display-${characterId}`);
    const normalAttackTableBody = document.getElementById(`normal-attack-table-${characterId}`).getElementsByTagName('tbody')[0];
    
    const level = normalAttackSlider.value;
    normalAttackLevelDisplay.textContent = `المستوى: ${level}`;
    
    // Clear existing table content
    normalAttackTableBody.innerHTML = '';
    
    // Example data for normal attack levels
    // Update normalAttackData to include character1
    const normalAttackData = {
        character1: {
            1: ["51.551%", "47.5933%", "33.0%+40.3327%", "115.412%", "25", "63.9324%", "127.83771%/159.67619%"],
            2: ["55.747%", "51.4671%", "35.6855%+43.6156%", "124.806%", "25", "69.1362%", "138.2431%/172.67309%"],
            3: ["59.943%", "55.341%", "38.3715%+46.8985%", "134.2%", "25", "74.34%", "148.6485%/185.67%"],
            4: ["65.9373%", "60.8751%", "42.2087%+51.5884%", "147.62%", "25", "81.774%", "163.5134%/204.23701%"],
            5: ["70.1333%", "64.749%", "44.8947%+54.8712%", "157.014%", "25", "86.9778%", "173.9187%/217.2339%"],
            6: ["74.9287%", "69.1762%", "47.9644%+58.6231%", "167.75%", "25", "92.925%", "185.8106%/232.08749%"],
            7: ["81.5225%", "75.2638%", "52.1852%+63.782%", "182.512%", "25", "101.1024%", "202.162%/252.51119%"],
            8: ["88.1162%", "81.3513%", "56.4061%+68.9408%", "197.27401%", "25", "109.2798%", "218.5133%/272.93489%"],
            9: ["94.7099%", "87.4388%", "60.627%+74.0996%", "212.03599%", "25", "117.4572%", "234.86459%/293.35859%"],
            10: ["101.9031%", "94.0797%", "65.2316%+79.7274%", "228.14%", "25", "126.378%", "252.7025%/315.639%"],
            11: ["109.0963%", "100.7206%", "69.8361%+85.3553%", "244.244%", "25", "135.2988%", "270.54031%/337.9194%"],
            12: ["116.2894%", "107.3615%", "74.4407%+90.9831%", "260.34801%", "25", "144.2196%", "288.3781%/360.19981%"],
            13: ["123.4826%", "114.0025%", "79.0453%+96.6109%", "276.45199%", "25", "153.1404%", "306.21591%/382.48019%"],
            14: ["130.6757%", "120.6434%", "83.6499%+102.2387%", "292.556%", "25", "162.0612%", "324.05369%/404.7606%"],
            15: ["137.86891%", "127.2843%", "88.2544%+107.8666%", "308.66%", "25", "170.982%", "341.8915%/427.04101%"]
        },
        character2: {
            1: ["53.6072%", "47.4672%", "74.7584%", "147.04%", "50", "56.8288%", "113.6335%/141.93439%"],
            2: ["57.6277%", "51.0272%", "80.3653%", "158.068%", "50", "61.4544%", "122.8828%/153.48721%"],
            3: ["61.6483%", "54.5873%", "85.9722%", "169.096%", "50", "66.08%", "132.13201%/165.04%"],
            4: ["67.009%", "59.334%", "93.448%", "183.8%", "50", "72.688%", "145.3452%/181.54401%"],
            5: ["71.0295%", "62.894%", "99.0549%", "194.828%", "50", "77.3136%", "154.5944%/193.0968%"],
            6: ["75.0501%", "66.4541%", "104.6618%", "205.85599%", "50", "82.6%", "165.165%/206.3%"],
            7: ["80.4108%", "71.2008%", "112.1376%", "220.56%", "50", "89.8688%", "179.6995%/224.4544%"],
            8: ["85.7715%", "75.9475%", "119.6134%", "235.26399%", "50", "97.1376%", "194.234%/242.60881%"],
            9: ["91.1322%", "80.6942%", "127.0893%", "249.968%", "50", "104.4064%", "208.76861%/260.76319%"],
            10: ["96.493%", "85.441%", "134.5651%", "264.67199%", "50", "112.336%", "224.6244%/280.568%"],
            11: ["101.8537%", "90.1877%", "142.041%", "279.37601%", "50", "120.2656%", "240.48021%/300.37279%"],
            12: ["107.2144%", "94.9344%", "149.5168%", "294.08%", "50", "128.1952%", "256.33609%/320.1776%"],
            13: ["113.9153%", "100.8678%", "158.8616%", "312.46%", "50", "136.1248%", "272.19191%/339.98239%"],
            14: ["120.6162%", "106.8012%", "168.20641%", "330.84%", "50", "144.0544%", "288.04779%/359.7872%"],
            15: ["127.31709%", "112.7346%", "177.5512%", "349.21999%", "50", "151.984%", "303.9036%/379.59199%"]
    }
};

// Ensure the function is called with the correct characterId
    const data = normalAttackData[characterId][level] || ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"];
    
    // Update table rows
    const rows = [
        "1-Hit DMG", "2-Hit DMG", "3-Hit DMG", "Charged Attack DMG", "Charged Attack Stamina Cost", "Plunge DMG", "Low/High Plunge DMG"
    ];
    
    rows.forEach((row, index) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent = row;
        td2.textContent = data[index];
        tr.appendChild(td1);
        tr.appendChild(td2);
        normalAttackTableBody.appendChild(tr);
    });
}

function updateSkillTable(characterId) {
    const skillSlider = document.getElementById(`skill-slider-${characterId}`);
    const skillLevelDisplay = document.getElementById(`skill-level-display-${characterId}`);
    const skillTableBody = document.getElementById(`skill-table-${characterId}`).getElementsByTagName('tbody')[0];
    
    const level = skillSlider.value;
    skillLevelDisplay.textContent = `المستوى: ${level}`;
    
    // Clear existing table content
    skillTableBody.innerHTML = '';
    
    // Example data for skill levels
    // Update skillData to include character1
    const skillData = {
        character1: {
            1: ["50.4%", "120.0%", "20s", "33.6%", "10s", "15s"],
            2: ["54.18%", "129.0%", "20s", "36.12%", "10s", "15s"],
            3: ["57.96%", "138.0%", "20s", "38.64%", "10s", "15s"],
            4: ["63.0%", "150.0%", "20s", "42.0%", "10s", "15s"],
            5: ["66.78%", "159.0%", "20s", "44.52%", "10s", "15s"],
            6: ["70.56%", "168.0%", "20s", "47.04%", "10s", "15s"],
            7: ["75.6%", "180.0%", "20s", "50.4%", "10s", "15s"],
            8: ["80.64%", "192.0%", "20s", "53.76%", "10s", "15s"],
            9: ["85.68%", "204.0%", "20s", "57.12%", "10s", "15s"],
            10: ["90.72%", "216.0%", "20s", "60.48%", "10s", "15s"],
            11: ["95.76%", "228.0%", "20s", "63.84%", "10s", "15s"],
            12: ["100.8%", "240.0%", "20s", "67.2%", "10s", "15s"],
            13: ["107.1%", "255.0%", "20s", "71.4%", "10s", "15s"],
            14: ["113.4%", "270.0%", "20s", "75.6%", "10s", "15s"],
            15: ["119.7%", "285.0%", "20s", "79.8%", "10s", "15s"]
        },
        character2: {
            1: ["133.36%", "20.16% Elemental Mastery+48.14847", "80", "7.5s"],
            2: ["143.362%", "21.672% Elemental Mastery+52.96399", "80", "7.5s"],
            3: ["153.364%", "23.184% Elemental Mastery+58.1808", "80", "7.5s"],
            4: ["166.7%", "25.2% Elemental Mastery+63.7989", "80", "7.5s"],
            5: ["176.702%", "26.712% Elemental Mastery+69.8183", "80", "7.5s"],
            6: ["186.704%", "28.224% Elemental Mastery+76.23898", "80", "7.5s"],
            7: ["200.04%", "30.24% Elemental Mastery+83.06097", "80", "7.5s"],
            8: ["213.376%", "32.256% Elemental Mastery+90.28424", "80", "7.5s"],
            9: ["226.71199%", "34.272% Elemental Mastery+97.90881", "80", "7.5s"],
            10: ["240.048%", "36.288% Elemental Mastery+105.93467", "80", "7.5s"],
            11: ["253.38399%", "38.304% Elemental Mastery+114.36182", "80", "7.5s"],
            12: ["266.72%", "40.32% Elemental Mastery+123.19027", "80", "7.5s"],
            13: ["283.39%", "42.84% Elemental Mastery+132.42001", "80", "7.5s"],
            14: ["300.06%", "45.36% Elemental Mastery+142.05104", "80", "7.5s"],
            15: ["316.73%", "47.88% Elemental Mastery+152.08337", "80", "7.5s"]
        }
    };
    
    // Get data for the current level and character
    const data = skillData[characterId][level] || ["N/A", "N/A", "N/A", "N/A"];
    
    // Update table rows
    const rows = [
        "Tonicshot DMG", "Tonicshot Healing On Hit", "Nightsoul Point Limit", "CD"
    ];
    
    rows.forEach((row, index) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent = row;
        td2.textContent = data[index];
        tr.appendChild(td1);
        tr.appendChild(td2);
        skillTableBody.appendChild(tr);
    });
}

function updateToolTable(characterId) {
    const toolSlider = document.getElementById(`tool-slider-${characterId}`);
    const toolLevelDisplay = document.getElementById(`tool-level-display-${characterId}`);
    const toolTableBody = document.getElementById(`tool-table-${characterId}`).getElementsByTagName('tbody')[0];
    
    const level = toolSlider.value;
    toolLevelDisplay.textContent = `المستوى: ${level}`;
    
    // Clear existing table content
    toolTableBody.innerHTML = '';
    
    // Data for tool levels from الت ايفا.txt
    const toolData = {
        character2: {
            1: ["508.47998%", "108.96%", "15s", "60"],
            2: ["546.61598%", "117.132%", "15s", "60"],
            3: ["584.75199%", "125.304%", "15s", "60"],
            4: ["635.6%", "136.2%", "15s", "60"],
            5: ["673.736%", "144.372%", "15s", "60"],
            6: ["711.87201%", "152.544%", "15s", "60"],
            7: ["762.72001%", "163.44%", "15s", "60"],
            8: ["813.56802%", "174.336%", "15s", "60"],
            9: ["864.41603%", "185.232%", "15s", "60"],
            10: ["915.26403%", "196.128%", "15s", "60"],
            11: ["966.11204%", "207.024%", "15s", "60"],
            12: ["1016.95995%", "217.92%", "15s", "60"],
            13: ["1080.51996%", "231.53999%", "15s", "60"],
            14: ["1144.07997%", "245.16%", "15s", "60"],
            15: ["1207.63998%", "258.78%", "15s", "60"]
        }
    };
    
    // Get data for the current level and character
    const data = toolData[characterId][level] || ["N/A", "N/A", "N/A", "N/A"];
    
    // Update table rows
    const rows = [
        "Skill DMG", "Sedation Mark DMG", "CD", "Energy Cost"
    ];
    
    rows.forEach((row, index) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent = row;
        td2.textContent = data[index];
        tr.appendChild(td1);
        tr.appendChild(td2);
        toolTableBody.appendChild(tr);
    });
}

function updateTable(characterId) {
    const levelSlider = document.getElementById(`level-slider-${characterId}`);
    const levelDisplay = document.getElementById(`level-display-${characterId}`);
    const tableBody = document.getElementById(`table-${characterId}`).getElementsByTagName('tbody')[0];
    
    // Map slider values to actual levels
    const levelMap = {
        1: 1,
        2: 20,
        3: 40,
        4: 50,
        5: 60,
        6: 70,
        7: 80,
        8: 90
    };
    
    const level = levelMap[levelSlider.value];
    levelDisplay.textContent = `المستوى: ${level}`;
    
    // Clear existing table content
    tableBody.innerHTML = '';
    
    // Updated data for each level
    const levelData = {
        character1: {
            1: ["★★★★★", "رمح", "1039", "27", "57", "0.0%", "1/1", "Turris Libum", "Cryo"],
            20: ["★★★★★", "رمح", "3586", "93", "197", "0.0%", "1/1", "Turris Libum", "Cryo"],
            40: ["★★★★★", "رمح", "5999", "156", "329", "4.8%", "1/1", "Turris Libum", "Cryo"],
            50: ["★★★★★", "رمح", "7747", "201", "425", "9.6%", "1/1", "Turris Libum", "Cryo"],
            60: ["★★★★★", "رمح", "9292", "241", "509", "9.6%", "1/1", "Turris Libum", "Cryo"],
            70: ["★★★★★", "رمح", "10846", "281", "593", "14.4%", "1/1", "Turris Libum", "Cryo"],
            80: ["★★★★★", "رمح", "12410", "321", "677", "19.2%", "1/1", "Turris Libum", "Cryo"],
            90: ["★★★★★", "رمح", "13348", "347", "732", "19.2%", "1/1", "Turris Libum", "Cryo"],
        },
    
        character2: {
            1: ["★★★★", "كتاب", "845", "15", "51", "0", "2/2", "Catena Opele", "انيمو"],
            20: ["★★★★", "كتاب", "2803", "50", "168", "0", "2/2", "Catena Opele", "انيمو"],
            40: ["★★★★", "كتاب", "4647", "82", "279", "24", "1/1", "Catena Opele", "انيمو"],
            50: ["★★★★", "كتاب", "5943", "105", "357", "48", "1/1", "Catena Opele", "انيمو"],
            60: ["★★★★", "كتاب", "7090", "125", "426", "48", "1/1", "Catena Opele", "انيمو"],
            70: ["★★★★", "كتاب", "8236", "146", "495", "72", "1/1", "Catena Opele", "انيمو"],
            80: ["★★★★", "كتاب", "9383", "166", "563", "96", "1/1", "Catena Opele", "انيمو"],
            90: ["★★★★", "كتاب", "10081", "178", "605", "96", "1/1", "Catena Opele", "انيمو"],
        }
    };
    
    // Get data for the current level and character
    const data = levelData[characterId][level] || ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"];
    
    // Update table rows
    const rows = [
        "الندرة", "السلاح", "HP", "بيس اتاك", "ديفنس", 
        characterId === 'character2' ? "ماستري" : "كريت ريت",
        "عيد ميلاد", "الكونستليشن", "العنصر"
    ];
    
    rows.forEach((row, index) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent = row;
        td2.textContent = data[index];
        tr.appendChild(td1);
        tr.appendChild(td2);
        tableBody.appendChild(tr);
    });
    }
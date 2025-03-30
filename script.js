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
            // ... existing character2 data ...
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
    
    // Update toolData to include character1
    const toolData = {
        character1: {
            1: ["592.8%", "172.032% ATK+1078.52551", "15s", "60"],
            2: ["637.26%", "184.9344% ATK+1186.39307", "15s", "60"],
            3: ["681.72002%", "197.8368% ATK+1303.24951", "15s", "60"],
            4: ["741.0%", "215.04% ATK+1429.09497", "15s", "60"],
            5: ["785.46%", "227.9424% ATK+1563.92944", "15s", "60"],
            6: ["829.92%", "240.8448% ATK+1707.75281", "15s", "60"],
            7: ["889.2%", "258.04801% ATK+1860.56519", "15s", "60"],
            8: ["948.48003%", "275.2512% ATK+2022.36646", "15s", "60"],
            9: ["1007.75995%", "292.45441% ATK+2193.15674", "15s", "60"],
            10: ["1067.03997%", "309.6576% ATK+2372.93604", "15s", "60"],
            11: ["1126.31998%", "326.86081% ATK+2561.7041", "15s", "60"],
            12: ["1185.6%", "344.064% ATK+2759.46143", "15s", "60"],
            13: ["1259.7%", "365.56799% ATK+2966.20752", "15s", "60"],
            14: ["1333.8%", "387.07199% ATK+3181.94263", "15s", "60"],
            15: ["1407.9%", "408.57601% ATK+3406.6665", "15s", "60"]
        },
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
            1: ["★★★★★", "رمح", "1039", "27", "57", "0.0%", "1/1", "Turris Libum", "كرايو"],
            20: ["★★★★★", "رمح", "3586", "93", "197", "0.0%", "1/1", "Turris Libum", "كرايو"],
            40: ["★★★★★", "رمح", "5999", "156", "329", "4.8%", "1/1", "Turris Libum", "كرايو"],
            50: ["★★★★★", "رمح", "7747", "201", "425", "9.6%", "1/1", "Turris Libum", "كرايو"],
            60: ["★★★★★", "رمح", "9292", "241", "509", "9.6%", "1/1", "Turris Libum", "كرايو"],
            70: ["★★★★★", "رمح", "10846", "281", "593", "14.4%", "1/1", "Turris Libum", "كرايو"],
            80: ["★★★★★", "رمح", "12410", "321", "677", "19.2%", "1/1", "Turris Libum", "كرايو"],
            90: ["★★★★★", "رمح", "13348", "347", "732", "19.2%", "1/1", "Turris Libum", "كرايو"],
        },

        character2: {
            1: ["★★★★", "كتاب", "900", "25", "50", "0.0%", "2/2", "Aquila Favonia", "Pyro"],
            20: ["★★★★", "كتاب", "3200", "85", "180", "0.0%", "2/2", "Aquila Favonia", "Pyro"],
            40: ["★★★★", "كتاب", "5999", "156", "329", "4.8%", "1/1", "Turris Libum", "Cryo"],
            50: ["★★★★", "كتاب", "7747", "201", "425", "9.6%", "1/1", "Turris Libum", "Cryo"],
            60: ["★★★★", "كتاب", "9292", "241", "509", "9.6%", "1/1", "Turris Libum", "Cryo"],
            70: ["★★★★", "كتاب", "10846", "281", "593", "14.4%", "1/1", "Turris Libum", "Cryo"],
            80: ["★★★★", "كتاب", "12410", "321", "677", "19.2%", "1/1", "Turris Libum", "Cryo"],
            90: ["★★★★", "كتاب", "13348", "347", "732", "19.2%", "1/1", "Turris Libum", "Cryo"],
        }
    };
    
    // Get data for the current level and character
    const data = levelData[characterId][level] || ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"];
    
    // Update table rows
    const rows = [
        "الندرة", "السلاح", "HP", "بيس اتاك", "ديفنس", "كريت ريت", "عيد ميلاد", "الكونستليشن", "العنصر"
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
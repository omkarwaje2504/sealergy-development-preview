
// To seed your database, run `npm run seed:db`
import { config } from 'dotenv';
import path from 'path';

// Force loading of .env.local file. This is the robust way.
config({ path: path.resolve(process.cwd(), '.env.local') });

import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { createSlug } from './utils';

// --- Environment Variable Validation ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error("🔴 Error: Missing Supabase environment variables.");
    console.error("Please make sure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in your .env.local file.");
    process.exit(1);
}
// --- End Validation ---


const productsData = [
    {
        id: 'type-600',
        name: 'Type 600',
        sub_category: 'Elastomeric Bellows Seals',
        category: 'Mechanical Seals',
        short_description: "The Sealergy Type 600 is a radially compact elastomer bellows design, highly suitable for water pump applications. The design features an easy-to-install construction with a compact working length intended to suit common water pump seal chambers. The sealing drive is provided by the elastomer drive grommet tightly gripping the shaft from a contact point under the coil end, providing a bi-directional \"non-pusher\" performance that minimises shaft fretting. Supplied with a Sealergy Type 600 boot-mounted stationary to suit common imperial housing sizes, the Sealergy Type 600 is highly suited to low-pressure light water circulation duties.",
        description: "Why Choose the Sealergy Seals Type 600?\nEffective and easy-to-install design. Highly suited to low-pressure domestic and municipal water pump duties. Sealergy Seals assembly provides a more integrated, robust, and resilient product compared to many market alternatives. The ribbed profile to the sealing contact point of the stationary provides optimal grip into stationary ressess with a sub-optimal surface finish.\n\nDimensional Data As Per Sealergy Brochure Sealergy Type 600",
        technical_features: {
            "Pressure": "Up to 6 bar (87 psi)",
            "Design": "Non-Pusher Bi-Directional",
            "Bellows": "Elastomer Bellow",
            "Equivalent to": "John Crane Type 6, Avon Type S Standard"
        },
        seal_face_combinations: [
            { "rotary_face": "Regular Carbon", "stationary_face": "Ceramic", "seal_code": "CV" },
            { "rotary_face": "Resin Carbon", "stationary_face": "Silicon Carbide", "seal_code": "RV" },
            { "rotary_face": "Silicon Carbide", "stationary_face": "Silicon Carbide", "seal_code": "QQ" }
        ],
        temp_capabilities: [
            { "material": "High Nitrile / Bhuna-N", "min_temp": -30, "max_temp": 120 },
            { "material": "EPEM", "min_temp": -30, "max_temp": 140 },
            { "material": "Viton/FKM", "min_temp": -30, "max_temp": 180 }
        ]
    },
    {
        id: 'type-301',
        name: 'TYPE 301',
        sub_category: 'Elastomeric Bellows Seals',
        category: 'Mechanical Seals',
        short_description: "Sealergy Seals Type 301 is an axially-compact elastomer bellows design, suitable for a wide variety of water pump applications. The design features a high flexibility to readily accommodate service misalignment and shaft run-out. The sealing drive is provided by the elastomer bellows tightly gripping the shaft from a contact point under the coil end, providing bi-directional \"non-pusher\" performance that minimises shaft fretting. Supplied with a Sealergy Seals Type 301 boot-mounted stationary, the Sealergy Seals Type 301 is designed to suit very short seal chambers with a wide radial clearance.",
        description: "Why Choose the Sealergy Seals Type 301 ?\nThe very short rotary operating height allows installation in a wide range of equipment duties. A smooth profile to the sealing contact point of the boot provides optimal grip into the stationary recess with a sub-optimal surface finish. The wide profile of the rotary face provides optimal sealing performance in slow to medium-speed pump applications\n\nDimensional Data As Per Sealergy Brochure Sealergy Type 301",
        technical_features: {
            "Pressure": "Up to 6 bar (87 psi)",
            "Design": "Non-Pusher Bi-Directional",
            "Bellows": "Elastomer Bellow",
            "Equivalent to": "John Crane Type 6,Avon Type M"
        },
        seal_face_combinations: [
            { "rotary_face": "Regular Carbon", "stationary_face": "Ceramic", "seal_code": "CV" },
            { "rotary_face": "Resin Carbon", "stationary_face": "Silicon Carbide", "seal_code": "RV" },
            { "rotary_face": "Silicon Carbide", "stationary_face": "Silicon Carbide", "seal_code": "QQ" },
            { "rotary_face": "Tungsten Carbide", "stationary_face": "Tungsten Carbide", "seal_code": "UU" }
        ],
        temp_capabilities: [
            { "material": "High Nitirle / Bhuna-N", "min_temp": -30, "max_temp": 120 },
            { "material": "EPEM", "min_temp": -30, "max_temp": 140 },
            { "material": "Viton/FKM", "min_temp": -30, "max_temp": 180 }
        ]
    },
    {
        id: 'type-601',
        name: 'Type 601',
        sub_category: 'Elastomeric Bellows Seals',
        category: 'Mechanical Seals',
        short_description: "The Sealergy Type 601 is a radially compact elastomer bellows design, highly suitable for water pump applications. The design features an easy-to-install construction with a compact working length intended to suit common water pump seal chambers. The sealing drive is provided by the elastomer drive grommet tightly gripping the shaft from a contact point under the coil end, providing a bi-directional \"non-pusher\" performance that minimises shaft fretting. Supplied with a Sealergy Type 601 boot-mounted stationary to suit common imperial housing sizes, the Sealergy Type 601 is highly suited to low-pressure light water circulation duties.",
        description: "Why Choose the Sealergy Seals Type 601?\nEffective and easy-to-install design. Highly suited to low-pressure domestic and municipal water pump duties. Sealergy Seals assembly provides a more integrated, robust, and resilient product compared to many market alternatives. The ribbed profile to the sealing contact point of the stationary provides optimal grip into stationary ressess with a sub-optimal surface finish.\n\nDimensional Data As Per Sealergy Brochure Sealergy Type 601",
        technical_features: {
            "Pressure": "Up to 4 bar (87 psi)",
            "Design": "Non-Pusher Bi-Directional",
            "Bellows": "Elastomer Bellow",
            "Equivalent to": "John Crane Type 6A,Avon Type F"
        },
        seal_face_combinations: [
            { "rotary_face": "Regular Carbon", "stationary_face": "Ceramic", "seal_code": "CV" },
            { "rotary_face": "Resin Carbon", "stationary_face": "Silicon Carbide", "seal_code": "RV" }
        ],
        temp_capabilities: [
            { "material": "High Nitrile / Bhuna-N", "min_temp": -30, "max_temp": 120 },
            { "material": "EPEM", "min_temp": -30, "max_temp": 140 },
            { "material": "Viton/FKM", "min_temp": -30, "max_temp": 180 }
        ]
    },
    {
        id: 'stork-type-301',
        name: 'Stork/TYPE 301',
        sub_category: 'Johnson Seals',
        category: 'Mechanical Seals',
        short_description: "Sealergy Seals Type Economic mechanical seal with small dimensions, used in large household pump productions for recirculating water or for working conditions with low demands. Sealergy Seals Type 301 is an axially-compact elastomer bellows design, suitable for a wide variety of water pump applications. The design features a high flexibility to readily accommodate service misalignment and shaft run-out. The sealing drive is provided by the elastomer bellows tightly gripping the shaft from a contact point under the coil end, providing bi-directional \"non-pusher\" performance that minimises shaft fretting. Supplied with a Sealergy Seals Type 301 boot-mounted stationary, the Sealergy Seals Type 301 is designed to suit very short seal chambers with a wide radial clearance.",
        description: "Why Choose the Sealergy Seals Type 301 ?\nThe very short rotary operating height allows installation in a wide range of equipment duties. A smooth profile to the sealing contact point of the boot provides optimal grip into the stationary recess with a sub-optimal surface finish. The wide profile of the rotary face provides optimal sealing performance in slow to medium-speed pump applications\n\nDimensional Data",
        technical_features: {
            "Pressure": "Up to 6 bar (87 psi)",
            "Design": "Non-Pusher Bi-Directional Elastomer Bellow",
            "Balance": "Unbalanced. Not dependent on the rotation direction.",
            "Spring": "Single cylindrical spring."
        },
        seal_face_combinations: [
            { "rotary_face": "Regular Carbon", "stationary_face": "Ceramic", "seal_code": "CV" },
            { "rotary_face": "Resin Carbon", "stationary_face": "Silicon Carbide", "seal_code": "RV" },
            { "rotary_face": "Silicon Carbide", "stationary_face": "Silicon Carbide", "seal_code": "QQ" },
            { "rotary_face": "Tungsten Carbide", "stationary_face": "Tungsten Carbide", "seal_code": "UU" }
        ],
        temp_capabilities: [
            { "material": "High Nitirle / Bhuna-N", "min_temp": -30, "max_temp": 120 },
            { "material": "EPEM", "min_temp": -40, "max_temp": 140 },
            { "material": "Viton/FKM", "min_temp": -30, "max_temp": 180 }
        ]
    },
    {
        id: 'j1-oring-type-155',
        name: 'J1 ORING/TYPE 155',
        sub_category: "Conical Spring 'O'-Ring Mounted Seals",
        category: 'Mechanical Seals',
        short_description: "The Sealergy Seals Type 155 seal is a resilient, 'O'-ring mounted \"pusher\" seal design with an 'O'-ring mounted sealing face in a narrow cross-section stainless steel pressed head. The seal drive is provided by the conical spring tightly gripping the equipment shaft at its drive end. Conical spring seals are mono-directional and have differential part codes for clockwise or anti-clockwise operation. The Sealergy Seals Type 155 complete seal is supplied with the Sealergy Seals Type 155 stationary to suit DIN24960/En12756 housing sizes.",
        description: "Why Choose the Sealergy Seals Type 155?\nThe 'O'-ring mounted seal face offers enhanced versatility. Cost effective seal option for light duty water circulators. Ceramic seal face provides improved sealing performance compared to standard stainless steel. Offers high temperature capability when fitted with suitable 'O'-rings. Suitable for light duty applications.",
        technical_features: {
            "Pressure": "Up to 12 bar (174 psi)",
            "Design": "PUSHER TYPE UNBALANCED SEAL",
            "Spring": "SINGLE CONICAL SPRING",
            "Type": "REPLACABLE ORING TYPE",
            "Equivalent to": "BURGMAN FN|ROTEN UNITEN 3*"
        },
        seal_face_combinations: [
            { "rotary_face": "Ceramic", "stationary_face": "Regular Carbon", "seal_code": "VC" },
            { "rotary_face": "Ceramic", "stationary_face": "Resin Carbon", "seal_code": "VR" },
            { "rotary_face": "Silicon Carbide", "stationary_face": "Silicon Carbide", "seal_code": "QQ" }
        ],
        temp_capabilities: [
            { "material": "High Nitirle / Bhuna-N", "min_temp": -30, "max_temp": 120 },
            { "material": "EPEM", "min_temp": -40, "max_temp": 140 },
            { "material": "Viton/FKM", "min_temp": -30, "max_temp": 180 }
        ],
        dimensions: [
            { "J1": "12MM", "D1": "20.6", "D2": "24.2", "L1": "7.8", "L2": "26" },
            { "J1": "14MM", "D1": "23.3", "D2": "24.2", "L1": "7.1", "L2": "25.8" },
            { "J1": "15MM", "D1": "27.4", "D2": "28.5", "L1": "8.4", "L2": "30" },
            { "J1": "16MM", "D1": "27.4", "D2": "28.5", "L1": "8.4", "L2": "30" },
            { "J1": "17MM", "D1": "27.4", "D2": "28.5", "L1": "9", "L2": "30" },
            { "J1": "18MM", "D1": "31.5", "D2": "32.8", "L1": "10.1", "L2": "36.2" },
            { "J1": "19MM", "D1": "31.5", "D2": "32.8", "L1": "10.1", "L2": "36.2" },
            { "J1": "20MM", "D1": "32.5", "D2": "32.8", "L1": "10.1", "L2": "38.2" },
            { "J1": "22MM", "D1": "35.9", "D2": "37.2", "L1": "8.7", "L2": "39" },
            { "J1": "24MM", "D1": "38.4", "D2": "38.4", "L1": "9.8", "L2": "36.2" },
            { "J1": "25MM", "D1": "38.4", "D2": "38.4", "L1": "9.8", "L2": "37.4" },
            { "J1": "28MM", "D1": "43.3", "D2": "44.5", "L1": "11.5", "L2": "45" },
            { "J1": "30MM", "D1": "43.4", "D2": "44.6", "L1": "11.4", "L2": "43.5" },
            { "J1": "32MM", "D1": "44.4", "D2": "47.6", "L1": "11.9", "L2": "42.7" },
            { "J1": "38MM", "D1": "60.3", "D2": "58.2", "L1": "10", "L2": "52" },
            { "J1": "40MM", "D1": "60.3", "D2": "58.2", "L1": "10", "L2": "52" },
        ]
    },
    {
        id: 'j1-bellow-type-155a',
        name: 'J1 BELLOW/TYPE 155A',
        sub_category: 'Conical Spring Diaphrams',
        category: 'Mechanical Seals',
        short_description: "The Sealergy Seals Type 155A seal is a 'Duck bellow mounted' \"pusher\" seal design with a sealing face Ring stainless steel pressed head. The seal drive is provided by the conical spring tightly gripping the equipment shaft at its drive end. Conical spring seals are mono-directional and have differential part codes for clockwise or anti-clockwise operation. The Sealergy Seals Type 155A complete seal is supplied with the Sealergy Seals Type 155A stationary to suit DIN24960/En12756 housing sizes.",
        description: "Why Choose the Sealergy Seals Type 155?\nThe 'Duck bellow' mounted seal face offers enhanced Duriablity. Cost effective seal option for light duty water circulators. Ceramic seal face provides improved sealing performance compared to standard stainless steel. Offers high temperature capability when fitted with suitable Duck Bellow Suitable for light duty applications.",
        technical_features: {
            "Pressure": "Up to 12 bar (174 psi)",
            "Design": "PUSHER TYPE UNBALANCED SEAL",
            "Spring": "SINGLE CONICAL SPRING",
            "Bellow": "DUCK BELLOW DESIGN"
        },
        seal_face_combinations: [
            { "rotary_face": "Ceramic", "stationary_face": "Regular Carbon", "seal_code": "VC" },
            { "rotary_face": "Ceramic", "stationary_face": "Resin Carbon", "seal_code": "VR" },
            { "rotary_face": "Silicon Carbide", "stationary_face": "Silicon Carbide", "seal_code": "QQ" }
        ],
        temp_capabilities: [
            { "material": "High Nitirle / Bhuna-N", "min_temp": -30, "max_temp": 120 },
            { "material": "EPEM", "min_temp": -40, "max_temp": 140 },
            { "material": "Viton/FKM", "min_temp": -30, "max_temp": 180 }
        ],
        dimensions: [
            { "J1": "12MM", "D1": "20.6", "D2": "24.2", "L1": "7.8", "L2": "26" },
            { "J1": "14MM", "D1": "23.3", "D2": "24.2", "L1": "7.1", "L2": "25.8" },
            { "J1": "15MM", "D1": "27.4", "D2": "28.5", "L1": "8.4", "L2": "30" },
            { "J1": "16MM", "D1": "27.4", "D2": "28.5", "L1": "8.4", "L2": "30" },
            { "J1": "17MM", "D1": "27.4", "D2": "28.5", "L1": "9", "L2": "30" },
            { "J1": "18MM", "D1": "31.5", "D2": "32.8", "L1": "10.1", "L2": "36.2" },
            { "J1": "19MM", "D1": "31.5", "D2": "32.8", "L1": "10.1", "L2": "36.2" },
            { "J1": "20MM", "D1": "32.5", "D2": "32.8", "L1": "10.1", "L2": "38.2" },
            { "J1": "22MM", "D1": "35.9", "D2": "37.2", "L1": "8.7", "L2": "39" },
            { "J1": "24MM", "D1": "38.4", "D2": "38.4", "L1": "9.8", "L2": "36.2" },
            { "J1": "25MM", "D1": "38.4", "D2": "38.4", "L1": "9.8", "L2": "37.4" },
            { "J1": "28MM", "D1": "43.3", "D2": "44.5", "L1": "11.5", "L2": "45" },
            { "J1": "30MM", "D1": "43.4", "D2": "44.6", "L1": "11.4", "L2": "43.5" },
            { "J1": "32MM", "D1": "44.4", "D2": "47.6", "L1": "11.9", "L2": "42.7" },
            { "J1": "38MM", "D1": "60.3", "D2": "58.2", "L1": "10", "L2": "52" },
            { "J1": "40MM", "D1": "60.3", "D2": "58.2", "L1": "10", "L2": "52" },
        ]
    },
    {
        id: 'honda-type-70',
        name: 'HONDA/TYPE 70',
        sub_category: 'Honda Pump Seals',
        category: 'Mechanical Seals',
        short_description: "The Sealergy Seals Type 70 is a stationary-mounted highly compact elastomer bellows design, highly suitable for high-shaft speed water pump applications. The design features a boot-mounted rotary counter ring that is intended to be inserted into a recess in the equipment impeller, with the metal sprung unit pressed into the static pump housing. The shaft clearance on both sealing faces enables one size to be used on a number of shaft sizes. No part of this design contacts the pump shaft so is therefore bi-directional, and the spring is static and removed from centrifugal influences allowing very high rotational speeds to be sealed. Supplied with a Sealergy Seals Type 70 boot-mounted stationary highly suited to low-pressure light water circulation duties.",
        description: 'Dimensional Data',
        technical_features: {
            "Balance": "Unbalanced",
            "Spring": "Single spring",
            "Direction": "Independent of direction of rotation",
            "Mounting": "Stationary spring-loaded unit"
        },
        seal_face_combinations: [
            { "rotary_face": "Ceramic", "stationary_face": "Regular Carbon", "seal_code": "VC" },
            { "rotary_face": "Ceramic", "stationary_face": "Resin Carbon", "seal_code": "VR" },
            { "rotary_face": "Silicon Carbide", "stationary_face": "Silicon Carbide", "seal_code": "QQ" }
        ],
        temp_capabilities: [
            { "material": "High Nitirle / Bhuna-N", "min_temp": -30, "max_temp": 120 },
            { "material": "EPEM", "min_temp": -40, "max_temp": 140 },
            { "material": "Viton/FKM", "min_temp": -30, "max_temp": 180 }
        ]
    },
    {
        id: 'robin-type-560',
        name: 'ROBIN/TYPE 560',
        sub_category: 'Parallel Spring Diaphragm Seals',
        category: 'Mechanical Seals',
        short_description: "The Sealergy Seals Type 560 is a resilient, rubber diaphragm mounted parallel spring seal design with self-adjusting head to accommodate minor shaft misalignment and run-out. The seal drive is provided by the diaphragm bellows tightly gripping the shaft and providing positive drive to the seal head and sealing face. The Sealergy Seals diaphragm seal designs are bi-directional \"pusher\" seals that minimise shaft fretting as the spring is constantly providing energising force to the shaft contact point and sealing face. Supplied with a Sealergy Seals Type 20 boot-mounted stationary to suit common metric and imperial UK and European extended length seal chambers.",
        description: "In-house manufactured sliding parts",
        technical_features: {
            "Seal": "Single seal",
            "Face": "Loosely inserted seal face provides self-adjusting capability"
        },
        seal_face_combinations: [
            { "rotary_face": "Ceramic", "stationary_face": "Regular Carbon", "seal_code": "VC" },
            { "rotary_face": "Ceramic", "stationary_face": "Resin Carbon", "seal_code": "VR" },
            { "rotary_face": "Silicon Carbide", "stationary_face": "Silicon Carbide", "seal_code": "QQ" },
            { "rotary_face": "Tungsten Carbide", "stationary_face": "Tungsten Carbide", "seal_code": "UU" }
        ],
        temp_capabilities: [
            { "material": "High Nitirle / Bhuna-N", "min_temp": -30, "max_temp": 120 },
            { "material": "EPEM", "min_temp": -40, "max_temp": 140 },
            { "material": "Viton/FKM", "min_temp": -30, "max_temp": 180 }
        ],
        dimensions: [
            { "DØ (Metr.)": "10", "Size Code": "0100", "D1": "24.60", "D3": "21.80", "L1": "43.66", "L2": "8.74" },
            { "DØ (Metr.)": "12", "Size Code": "0120", "D1": "27.79", "D3": "23.50", "L1": "43.66", "L2": "8.74" },
            { "DØ (Metr.)": "13", "Size Code": "0130", "D1": "27.79", "D3": "23.50", "L1": "43.66", "L2": "8.74" },
            { "DØ (Metr.)": "14", "Size Code": "0140", "D1": "30.95", "D3": "27.00", "L1": "43.66", "L2": "10.32" },
            { "DØ (Metr.)": "15", "Size Code": "0150", "D1": "30.95", "D3": "27.00", "L1": "43.66", "L2": "10.32" },
            { "DØ (Metr.)": "16", "Size Code": "0160", "D1": "30.95", "D3": "27.00", "L1": "43.66", "L2": "10.32" },
            { "DØ (Metr.)": "18", "Size Code": "0180", "D1": "34.15", "D3": "30.70", "L1": "43.66", "L2": "10.32" },
        ]
    }
];

const applicationsData = [
    { name: "Water & Wastewater", description: "Durable, corrosion-resistant seals for continuous service in water treatment and distribution.", image: "/Updated%20Images/Siddhi%20Seals%20Resize%20%26%20Recreate%20Website%20Creatives/Resize/Application%20Industries/Water%20%26%20Wastewater.jpg", imageHint: "water treatment" },
    { name: "Oil & Gas", description: "High-pressure, high-temperature seals engineered for hydrocarbon and abrasive fluid applications in the oil and gas industry.", image: "/Updated%20Images/Siddhi%20Seals%20Resize%20%26%20Recreate%20Website%20Creatives/Resize/Application%20Industries/Oil%20%26%20Gas.jpg", imageHint: "oil rig" },
    { name: "Chemical Processing", description: "Chemically inert seals made from materials like PTFE and Viton to handle corrosive and aggressive media safely.", image: "/Updated%20Images/Siddhi%20Seals%20Resize%20%26%20Recreate%20Website%20Creatives/Resize/Application%20Industries/Chemical%20Processing.jpg", imageHint: "chemical plant" },
    { name: "Power Generation", description: "Reliable sealing solutions for turbines, boiler feed pumps, and auxiliary systems in power plants.", image: "/Updated%20Images/Siddhi%20Seals%20Resize%20%26%20Recreate%20Website%20Creatives/Resize/Application%20Industries/Power%20Generation.jpg", imageHint: "power plant" },
    { name: "Pharmaceutical", description: "Hygienic, contamination-free seals that meet stringent FDA and cGMP standards for pharmaceutical manufacturing.", image: "/Updated%20Images/Siddhi%20Seals%20Resize%20%26%20Recreate%20Website%20Creatives/Resize/Application%20Industries/Food%20%26%20Beverage.jpg", imageHint: "pharmaceutical factory" },
    { name: "Food & Beverage", description: "Food-grade seals that comply with hygienic standards for safe and reliable processing of consumables.", image: "/Updated%20Images/Siddhi%20Seals%20Resize%20%26%20Recreate%20Website%20Creatives/Resize/Application%20Industries/Food%20%26%20Beverage.jpg", imageHint: "food factory" },
    { name: "HVAC & Cooling", description: "Specialized seals designed for refrigerants, brines, and other thermal fluids in heating, ventilation, and air conditioning systems.", image: "/Updated%20Images/Siddhi%20Seals%20Resize%20%26%20Recreate%20Website%20Creatives/Resize/Application%20Industries/Power%20Generation.jpg", imageHint: "hvac system" },
    { name: "Marine & Shipbuilding", description: "Durable, saltwater-tolerant mechanical seals for bilge pumps, cargo pumps, and other marine applications.", image: "/Updated%20Images/Siddhi%20Seals%20Resize%20%26%20Recreate%20Website%20Creatives/Resize/Application%20Industries/Mining.jpg", imageHint: "shipbuilding" },
];

const articlesData = [
    { 
        title: "Preventing Seal Failure in High-RPM Applications", 
        content: `<h2>Understanding the Dynamics of High-RPM Environments</h2><p>High-RPM (Revolutions Per Minute) rotating equipment places extraordinary physical demands on mechanical seals. As rotational speeds increase, centrifugal forces, frictional heat, and face surface velocities multiply exponentially. Understanding how to prevent premature failure in these conditions is essential for maintaining process uptime and avoiding catastrophic fluid release.</p><h3>Key Causes of High-Speed Seal Failures</h3><ul><li><strong>Excessive Heat Generation (Thermal Distort)</strong>: Frictional heat generated at the interface between the rotary and stationary faces can vaporize the fluid film that provides lubrication, leading to dry running and face fracture.</li><li><strong>Centrifugal Force Effects</strong>: High speeds can cause particulates or suspended solids in the fluid to accumulate on the outer diameter of the seal faces, causing accelerated abrasive wear.</li><li><strong>Vibration and Shaft Runout</strong>: Dynamic forces at high RPMs aggravate even minor shaft misalignment, causing faces to wobble, separate, or crack.</li></ul><h3>Engineering Mitigations & Vortex Reduction</h3><p>Sealergy implements several cutting-edge vortex-reduction and thermal dissipation technologies in our high-speed designs:</p><ol><li><strong>Hydraulically Balanced Faces</strong>: Balanced seals reduce the net closing force on the seal faces, significantly lowering frictional heat while maintaining an optimal fluid film.</li><li><strong>Directional Pumping Grooves</strong>: Laser-etched micro-grooves on the seal faces act as pumping rings, drawing cooling fluid directly across the sealing interface.</li><li><strong>Premium Materials</strong>: Silicon Carbide (SiC) vs. Silicon Carbide configurations offer the superior thermal conductivity and hardness needed to withstand continuous high-velocity shear.</li></ol>` 
    },
    { 
        title: "How to Choose the Right Pump Seal", 
        content: `<h2>The S.T.A.R.P. Methodology for Mechanical Seal Selection</h2><p>Selecting the correct mechanical seal is the single most critical factor in ensuring pump reliability. A mismatch between the seal design and the process conditions can cause failure within days or even hours. Sealergy utilizes the comprehensive <strong>S.T.A.R.P.</strong> methodology to guide engineers to the correct choice.</p><h3>1. Size (S)</h3><p>Determine the precise physical dimensions of the pump:</p><ul><li>Shaft or sleeve outer diameter.</li><li>Stuffing box/seal chamber bore diameter.</li><li>Stuffing box depth and distance to the nearest obstruction.</li></ul><h3>2. Temperature (T)</h3><p>The operating temperature of the process fluid dictates the elastomer selection. High-temperature applications (above 150°C) require Viton (FKM), Kalrez (FFKM), or metal bellows. Cryogenic applications require highly specialized static packings.</p><h3>3. Application/Media (A)</h3><p>Analyze the chemical properties of the pumped fluid:</p><ul><li><strong>Corrosiveness</strong>: Acidic or alkaline fluids require chemically inert PTFE (Teflon) seals.</li><li><strong>Abrasiveness</strong>: Slurries or suspended solids demand hard-hard face combinations like Tungsten Carbide (TC) to prevent scoring.</li><li><strong>Hygienic Requirements</strong>: Food, beverage, and pharma applications require FDA-compliant materials and self-draining profiles.</li></ul><h3>4. Rate/Speed (R)</h3><p>Rotational shaft speed determines whether an unbalanced, balanced, or high-speed static seal is required. High speeds demand static-spring designs where the springs do not rotate, preventing spring distortion due to centrifugal force.</p><h3>5. Pressure (P)</h3><p>Verify the seal chamber pressure. Standard seals operate up to 10-12 bar. Higher pressures (up to 80 bar) demand balanced multi-spring seals like our <strong>H17N</strong> series or metal bellows configurations.</p>` 
    },
    { 
        title: "ISO 9001 in Seal Manufacturing", 
        content: `<h2>Quality Management Systems & Precision Engineering</h2><p>In mechanical seal manufacturing, tolerance is measured in microns. Even a microscopically small variance can compromise the face flatness, leading to fluid leakage. This is why Sealergy operates under a rigorous ISO 9001:2015 certified Quality Management System (QMS).</p><h3>What ISO 9001 Means for Our Sealing Products</h3><ul><li><strong>Traceability</strong>: Every single raw material—from raw silicon carbide to stainless steel bars—comes with certified material test reports (MTRs) and is fully traceable back to its origin.</li><li><strong>Ultrasonic Testing</strong>: We utilize non-destructive ultrasonic and liquid penetrant testing to verify that there are no subsurface cracks or stress anomalies in our seal face castings.</li><li><strong>Helium Light Band Flatness Verification</strong>: After final lapping, all sealing faces are inspected under monochromatic light using optical flats. We guarantee a flatness tolerance within <strong>1 to 2 light bands</strong> (0.3 to 0.6 microns).</li></ul><h3>Continuous Auditing & Process Control</h3><p>Our Mumbai-based manufacturing facility undergoes continuous internal and external audits to ensure process parameters are strictly maintained. Every seal assembly is pressure-tested on specialized pneumatic test rigs before it is packaged and shipped, ensuring out-of-the-box reliability.</p>` 
    },
    { 
        title: "Advanced Materials for Extreme Conditions", 
        content: `<h2>Material Science: The Foundation of Sealing Success</h2><p>Modern industrial processing regularly pushes temperature, pressure, and chemical aggressiveness to extreme levels. Surviving these conditions requires selecting advanced materials engineered for extreme durability.</p><h3>1. Seal Face Materials</h3><table class="min-w-full border-collapse border border-slate-200 mt-4 mb-6"><thead><tr class="bg-slate-100"><th class="border border-slate-200 p-2 text-left text-sm font-semibold">Material</th><th class="border border-slate-200 p-2 text-left text-sm font-semibold">Thermal Conductivity</th><th class="border border-slate-200 p-2 text-left text-sm font-semibold">Best Applied For</th></tr></thead><tbody><tr><td class="border border-slate-200 p-2 text-sm font-medium">Silicon Carbide (SiC)</td><td class="border border-slate-200 p-2 text-sm">Extremely High</td><td class="border border-slate-200 p-2 text-sm">Corrosive fluids, fast rotation, and general industrial water.</td></tr><tr class="bg-slate-50"><td class="border border-slate-200 p-2 text-sm font-medium">Tungsten Carbide (TC)</td><td class="border border-slate-200 p-2 text-sm">High</td><td class="border border-slate-200 p-2 text-sm">Slurries, high pressures, and heavy vibration. Resistant to fracture.</td></tr><tr><td class="border border-slate-200 p-2 text-sm font-medium">Resin Carbon</td><td class="border border-slate-200 p-2 text-sm">Medium</td><td class="border border-slate-200 p-2 text-sm">Excellent dry-running/self-lubrication properties in clean fluids.</td></tr></tbody></table><h3>2. Elastomers and O-Rings</h3><ul><li><strong>Viton (FKM)</strong>: Outstanding chemical resistance in oils, fuels, and acids up to 180°C.</li><li><strong>EPDM</strong>: The premier choice for hot water, steam, and water-glycol mixtures up to 140°C.</li><li><strong>PTFE (Teflon)</strong>: Fully inert to virtually all acids and alkalis, making it indispensable in heavy chemical applications.</li></ul>` 
    },
    { 
        title: "Installation Guide", 
        content: `<h2>Step-by-Step Installation Guide for Sealergy Mechanical Seals</h2><p>Over 80% of premature mechanical seal failures are caused by improper installation. Following a clean, methodical installation procedure is the easiest way to ensure the long-term reliability of your rotating equipment.</p><h3>Pre-Installation Checklist</h3><ol><li><strong>Cleanliness is Paramount</strong>: Perform the installation in a clean, dust-free environment. Even a single speck of dust on the seal faces can cause leakage.</li><li><strong>Inspect the Shaft</strong>: Ensure the shaft or sleeve is completely free of burrs, scratches, or corrosion. Polish away any roughness with fine emery cloth.</li><li><strong>Verify Shaft Runout</strong>: Use a dial indicator to ensure the shaft radial runout is within <strong>0.05 mm (0.002 inches)</strong> and axial play is less than 0.08 mm.</li></ol><h3>Installation Steps</h3><p><strong>Step 1: Mount the Stationary Seat</strong><br />Lubricate the static elastomer (O-ring or boot) with a compatible lubricant (soapy water or silicone spray—never use grease on EPDM!). Press the seat firmly into the gland plate using a clean cloth or cardboard protector.</p><p><strong>Step 2: Position the Rotary Assembly</strong><br />Gently slide the rotary unit onto the shaft. Be extremely careful not to scrape the inner elastomer bellows or O-ring over keyways or sharp shoulders (wrap keyways in plastic tape before sliding the seal on).</p><p><strong>Step 3: Align the Sealing Faces</strong><br />Bring the gland plate containing the stationary seat up to the pump housing. Ensure the faces meet completely parallel and flat. Tighten the gland bolts in a star pattern to ensure even pressure.</p>` 
    },
    { 
        title: "Maintenance Tips", 
        content: `<h2>Best Practices for Extending Mechanical Seal Lifespan</h2><p>Once installed, a mechanical seal is a dynamic system that requires the correct operating environment to thrive. Proper preventive maintenance and fluid management will dramatically extend your seal's lifetime.</p><h3>1. Maintain the Lubrication Film</h3><p>Mechanical seals rely on a microscopically thin fluid film (the process fluid itself) between the rotating faces to lubricate and cool them. <strong>Never run a pump dry.</strong> Dry running causes instantaneous heat buildup, leading to thermal shock and immediate face failure.</p><h3>2. Optimize Environmental Piping Plans (API Plans)</h3><p>Implementing the correct API piping plan provides the necessary temperature and pressure control:</p><ul><li><strong>API Plan 11 (Discharge Flush)</strong>: Recirculates fluid from the pump discharge to the seal chamber to provide cooling.</li><li><strong>API Plan 53A (Dual Seal Pressurized Barrier)</strong>: Uses a pressurized barrier reservoir to prevent toxic or abrasive fluids from entering the sealing faces, ensuring zero leakage of process fluid.</li></ul><h3>3. Monitor Vibration Levels</h3><p>Vibration is the silent enemy of seal faces. Establish a regular vibration-monitoring schedule. Elevated vibration is a warning sign of coupling misalignment, bearing wear, or impeller imbalance—all of which will quickly ruin your mechanical seal.</p>` 
    },
    { 
        title: "Technical Specs", 
        content: `<h2>Standard Operating Parameters & Manufacturing Tolerances</h2><p>All Sealergy mechanical seals are manufactured in strict compliance with international standards, including DIN 24960, EN 12756, and API 682. This ensures complete dimensional interchangeability with major OEM brands.</p><h3>Key Operating Capabilities</h3><ul><li><strong>Pressure Limits</strong>: Standard unbalanced elastomer bellows seals operate up to 12 bar (174 psi). Balanced multiple spring seals operate up to 80 bar (1,160 psi).</li><li><strong>Temperature Range</strong>: From -40°C up to +200°C depending on the elastomer selection (EPDM, NBR, Viton, or PTFE).</li><li><strong>Shaft Velocity</strong>: Standard seals accommodate speeds up to 15 m/s. Specialized balanced models are certified up to 25 m/s.</li></ul><h3>Metrology & Flatness Tolerances</h3><ul><li><strong>Face Flatness</strong>: Measured utilizing monochromatic Helium light bands. Permissible tolerance is <strong>1 to 2 light bands</strong> (0.3 - 0.6 microns).</li><li><strong>Dimensional Tolerance</strong>: Precision machined stainless steel components are held within <strong>±0.05 mm</strong>.</li><li><strong>Spring Compression Force</strong>: Calibrated springs maintain a uniform face loading pressure between 1.5 to 2.2 kg/cm².</li></ul>` 
    },
    { 
        title: "Troubleshooting Guide", 
        content: `<h2>Diagnostic Guide: Identifying Common Seal Failure Modes</h2><p>When a mechanical seal fails, the damage left behind on the faces and elastomers provides critical clues. Analyzing these failure patterns allows you to identify the root cause and implement the correct fix.</p><h3>1. Face Wear Patterns & Diagnostics</h3><ul><li><strong>Thermal Cracking/Blistering</strong>: Radial cracks on the face indicate extreme local heat. <em>Root Cause</em>: Dry running or insufficient cooling flush.</li><li><strong>Heavy Uniform Scoring</strong>: Deep concentric grooves on the faces. <em>Root Cause</em>: Solid particulates or abrasive slurries trapped in the seal chamber. **Fix**: Upgrade to hard faces (Silicon Carbide) or install a clean external flush.</li><li><strong>Concentric Wear Track Deviation</strong>: Uneven wear track. <em>Root Cause</em>: Severe shaft misalignment or gland plate cocking.</li></ul><h3>2. Elastomer (O-Ring & Bellows) Diagnostics</h3><ul><li><strong>Swelling or Softening</strong>: The O-ring is sticky or deformed. <em>Root Cause</em>: Chemical incompatibility with the process fluid. **Fix**: Upgrade NBR to Viton or PTFE.</li><li><strong>Blistering/Exploding</strong>: The elastomer has tiny craters or has ruptured. <em>Root Cause</em>: Rapid gas decompression in high-pressure gas service.</li><li><strong>Hardening or Cracking</strong>: The rubber is brittle and snaps easily. <em>Root Cause</em>: Operating beyond the thermal limit of the elastomer.</li></ul>` 
    },
];


const productThumbnails: Record<string, string> = {
  'type-600': '1-OPEN (TYPE 600).jpg',
  'type-301': '2-CLOSE (TYPE 301).jpg',
  'type-601': '3-BELOW (TYPE 600).jpg',
  'stork-type-301': '4-STORK (TYPE 301A).jpg',
  'j1-oring-type-155': '5-J1 BELLOW (TYPE 155).jpg',
  'j1-bellow-type-155a': '6-J1 BELLOW (TYPE 155A).jpg',
  'honda-type-70': '7-HONDA (TYPE 70).jpg',
  'robin-type-560': '8-ROBIN (TYPE 560).jpg',
  'new-robin-type-560a': '9-NEW ROBIN (TYPE 560A).jpg',
  'double-robin-type-560d': '10-DOUBLE ROBIN (TYPE 560D).jpg',
  'double-robin-mg1-type-560m': '11-DOUBLE ROBIN MG1 (TYPE 560M).jpg',
  'crane-type-2': '12-CRANE (TYPE 2).jpg',
  'mg9-type-mg9': '13-MG9 (TYPE 9).jpg',
  'mg1-type-m01': '14-MG1 (TYPE M1).jpg',
  'jc1-type-21s': '15-JC1 (TYPE 21S).jpg',
  'jc2-type-21l': '16-JC1 (TYPE 21L).jpg',
  'm3n-type-m3n': '18-M3N (TYPE M3).jpg',
  'multispring-type-muo': '21-MULTISPRING (TYPE MUO).jpg',
  'multispring-double-type-mud': '22-MULTISPRING WEDGE  (TYPE MUW).jpg',
  'grundfose-clutch-type-gr5': '24-GRUNDOSE CLUTH (TYPE GR5).jpg',
  'type-502': '27-502(TYPE 502).jpg',
  'teflon-below-type-tbt': '28-TEFLON BELOW (TYPE TBT).jpg',
  'teflon-mg1-type-tbm': '29-TEFLON MG1 (TYPE TBM).jpg',
  'mg12-type-m12': 'MG12.jpg',
  'mg13-type-m13': 'MG13.jpg',
  'm2n-type-m2n': 'M.jpg',
  'h17n-type-h17': 'DRR.jpg',
  'grundfose-ch12-type-ch12': 'CH12.jpg',
  'g04-type-gr4': 'G05.jpg',
  'type-156': 'hex t166.jpg',
  'ptfe-seal': 'hex t166.jpg',
  's20-type-s20': 'MGS20.jpg',
  'single-spring-lps-150': 'MULTI  SPRING.jpg',
  'single-spring-seal-ssp': 'MULTI  SPRING.jpg',
  'submersible-pump-type-ner': 'BELOW.jpg',
  'sumo-oring-type-suo': 'J1OR.jpg',
  'sumo-bellow-type-sub': 'J1 BELOW.jpg',
  'unitised-honda-type-uho': 'HONDA.jpg',
  'acid-pump-plastic-type-app': 'APP.jpg',
  'acid-pump-teflone-type-apt': 'APT.jpg',
  'fristam-pump-type-frm': 'DRM.jpg',
  'm7n-type-m7': 'M7N.jpg',
};

const creativeFolders: Record<string, string> = {
  'mg12-type-m12': 'MG12 - TYPE  M12',
  'mg13-type-m13': 'MG13 - TYPE  M13',
  'm2n-type-m2n': 'M2N - TYPE  M2N',
  'h17n-type-h17': 'H17N - TYPE  H17',
  'g04-type-gr4': 'G04 - TYPE  GR4',
  'type-156': '156 - TYPE 156',
  'ptfe-seal': 'PTFE SEAL',
  's20-type-s20': 'S20 - TYPE  S20',
  'single-spring-lps-150': 'SINGLE  SPRING  LPS  150 - TYPE  LPS  150',
  'single-spring-seal-ssp': 'SINGLE  SPRING  SEAL  SSP - TYPE  SSP',
  'submersible-pump-type-ner': 'SUBMERSIBLE  PUMP-TYPE NER',
  'sumo-oring-type-suo': 'SUMO  ORING - TYPE  SUO',
  'sumo-bellow-type-sub': 'SUMO BELLOW - TYPE  SUB',
  'unitised-honda-type-uho': 'UNITISED HONDA-TYPE UHO',
  'acid-pump-plastic-type-app': 'ACID PUMP PLASTIC - TYPE  APP',
  'acid-pump-teflone-type-apt': 'ACID PUMP TEFLONE - TYPE  APT',
  'fristam-pump-type-frm': 'FRISTAM  PUMP -  TYPE  FRM',
  'm7n-type-m7': 'M7N - TYPE  M7',
  'grundfose-ch12-type-ch12': 'GRUNDFOSE  CH12- TYPE  CH12',
};

function getProductImageForSeed(productId: string, name: string): string {
  const thumb = productThumbnails[productId];
  if (thumb) {
    return `/Individual Product Thumbnail/${thumb}`;
  }
  const folder = creativeFolders[productId];
  if (folder) {
    return `/Graphic Data (Creatives)-20260518T180446Z-3-001/Graphic Data (Creatives)/${folder}/${folder}-02.jpg`;
  }
  const productSlug = createSlug(name);
  return `/Updated%20Images/view%20All%20Product%20page%20Images/All/${productSlug.toUpperCase()}.jpg`;
}


async function main() {
    console.log(`\nConnecting to Supabase at: ${supabaseUrl}`);
    const supabase = createSupabaseClient(supabaseUrl!, supabaseServiceKey!, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    });

    console.log('--- STARTING DATABASE SEED ---');

    // --- 1. Clear Existing Data ---
    console.log('Clearing existing data from tables...');
    // Clear in reverse order of dependency
    const tablesToClear = [
        'product_dimensions',
        'product_elastomer_temperatures',
        'product_seal_face_combinations',
        'product_technical_features',
        'products',
        'product_subcategories',
        'product_categories',
        'applications',
        'articles'
    ];
    for (const table of tablesToClear) {
        const { error: deleteError } = await supabase.from(table).delete().gt('id', -1);
        if (deleteError) {
            console.warn(`🟡 Warn clearing ${table}:`, deleteError.message); // Use warn as it might fail if table doesn't exist
        }
    }
    console.log('✅ Existing data cleared.');

    // --- 2. SEED DATA ---
    // A. Categories
    console.log('Seeding product_categories...');
    const categoriesToInsert = [
        { id: 1, name: 'Mechanical Seals', description: 'High-performance seals for pumps and rotating equipment.' },
        { id: 2, name: 'Industrial Pumps', description: 'A range of pumps for various industrial uses.' },
        { id: 3, name: 'Gaskets & O-Rings', description: 'Static sealing solutions for a variety of applications.' },
        { id: 4, name: 'Oil seals', description: 'Seals designed for retaining lubrication and preventing leaks in rotating shafts.' },
    ];
    const { data: categories, error: catError } = await supabase.from('product_categories').insert(categoriesToInsert).select();
    if (catError) {
        console.error("🔴 Error seeding product_categories:", catError.message);
        return;
    }
    console.log(`✅ Seeded ${categories.length} categories.`);
    const categoryMap = new Map(categories.map(c => [c.name, c.id]));

    // B. Sub-Categories
    console.log('Seeding product_subcategories...');
    const mechSealCatId = categoryMap.get('Mechanical Seals');
    const subCategoriesToInsert = [
        { category_id: mechSealCatId, name: "Elastomeric Bellows Seals" },
        { category_id: mechSealCatId, name: "Parallel Spring Diaphragm Seals" },
        { category_id: mechSealCatId, name: "Conical Spring Diaphrams" },
        { category_id: mechSealCatId, name: "Conical Spring 'O'-Ring Mounted Seals" },
        { category_id: mechSealCatId, name: "Multiple Spring Seals" },
        { category_id: mechSealCatId, name: "Wave Spring Seals" },
        { category_id: mechSealCatId, name: "PTFE Seals" },
        { category_id: mechSealCatId, name: "Grundfos Seals" },
        { category_id: mechSealCatId, name: "Parallel Spring 'O'-Ring Mounted Seals" },
        { category_id: mechSealCatId, name: "Fristam Seals" },
        { category_id: mechSealCatId, name: "Alfa Laval Seals" },
        { category_id: mechSealCatId, name: "Lubi Seals" },
        { category_id: mechSealCatId, name: "Kulkarni Seals" },
        { category_id: mechSealCatId, name: "Kishor Seals" },
        { category_id: mechSealCatId, name: "Sumo Pump Seals" },
        { category_id: mechSealCatId, name: "Honda Pump Seals" },
        { category_id: mechSealCatId, name: "Compressor Seals" },
        { category_id: mechSealCatId, name: "Johnson Seals" },
    ];
    const { data: subCategories, error: subCatError } = await supabase.from('product_subcategories').insert(subCategoriesToInsert).select();
    if (subCatError) {
        console.error("🔴 Error seeding product_subcategories:", subCatError.message);
        return;
    }
    console.log(`✅ Seeded ${subCategories.length} sub-categories.`);
    const subCategoryMap = new Map(subCategories.map(sc => [sc.name, sc.id]));

    // C. Products and their details
    console.log('Seeding products and their details...');
    for (const p of productsData) {
        const productId = p.id;
        const productSlug = createSlug(p.name);

        // C.1 Insert the main product
        const { error: prodError } = await supabase.from('products').insert({
            id: productId,
            image: getProductImageForSeed(productId, p.name),
            imageHint: "mechanical seal",
            short_description: p.short_description,
            description: p.description,
            primary_category_id: categoryMap.get(p.category),
            primary_subcategory_id: subCategoryMap.get(p.sub_category),
        });
        if (prodError) {
            console.error(`🔴 Error seeding product ${productId}:`, prodError.message);
            continue; // Skip to next product
        }

        // C.2 Insert technical features
        if (p.technical_features) {
            const featuresToInsert = Object.entries(p.technical_features).map(([key, value]) => ({
                product_id: productId,
                feature_key: key,
                feature_value: value,
            }));
            const { error: featureError } = await supabase.from('product_technical_features').insert(featuresToInsert);
            if (featureError) console.error(`🔴 Error seeding features for ${productId}:`, featureError.message);
        }

        // C.3 Insert seal face combinations
        if (p.seal_face_combinations) {
            const combinationsToInsert = p.seal_face_combinations.map(combo => ({
                product_id: productId,
                ...combo,
            }));
            const { error: comboError } = await supabase.from('product_seal_face_combinations').insert(combinationsToInsert);
            if (comboError) console.error(`🔴 Error seeding combinations for ${productId}:`, comboError.message);
        }

        // C.4 Insert elastomer temperatures
        if (p.temp_capabilities) {
            const tempsToInsert = p.temp_capabilities.map(temp => ({
                product_id: productId,
                elastomer_name: temp.material,
                temperature_min: temp.min_temp,
                temperature_max: temp.max_temp,
                temperature_unit: 'C',
            }));
            const { error: tempError } = await supabase.from('product_elastomer_temperatures').insert(tempsToInsert);
            if (tempError) console.error(`🔴 Error seeding temperatures for ${productId}:`, tempError.message);
        }

        // C.5 Insert dimensions
        if (p.dimensions) {
            const { error: dimError } = await supabase.from('product_dimensions').insert({
                product_id: productId,
                dimensions_data: p.dimensions
            });
            if (dimError) console.error(`🔴 Error seeding dimensions for ${productId}:`, dimError.message);
        }
    }
    console.log(`✅ Seeded ${productsData.length} products with their details.`);


    // D. Applications
    console.log('Seeding applications...');
    const applicationsToInsert = applicationsData.map(app => ({
        ...app,
        slug: createSlug(app.name)
    }));
    const { data: seededApps, error: appError } = await supabase.from('applications').insert(applicationsToInsert).select();
    if (appError) {
        console.error("🔴 Error seeding applications:", appError.message);
        return;
    }
    console.log(`✅ Seeded ${seededApps.length} applications.`);


    // E. Articles
    console.log('Seeding articles...');
    const articlesToInsert = articlesData.map(art => ({
        ...art,
        slug: createSlug(art.title)
    }));
    const { data: seededArticles, error: articleError } = await supabase.from('articles').insert(articlesToInsert).select();
    if (articleError) {
        console.error("🔴 Error seeding articles:", articleError.message);
        return;
    }
    console.log(`✅ Seeded ${seededArticles.length} articles.`);


    console.log('\n--- ✅ DATABASE SEEDING COMPLETE ---');
}

main().catch(e => {
    console.error("🔴 An unexpected error occurred during seeding:", e);
    process.exit(1);
});

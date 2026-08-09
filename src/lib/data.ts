
export interface ProductCategory {
    id: number;
    name: string;
    slug: string;
    description?: string;
}

export interface ProductSubCategory {
    id: number;
    name: string;
    slug: string;
    category_id: number;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    product_code?: string;
    image?: string;
    imageHint?: string;
    short_description?: string;
    description?: string;
    primary_category_id?: number;
    primary_subcategory_id?: number;
    category_name?: string;
    category_slug?: string;
    subcategory_name?: string;
    subcategory_slug?: string;
}

export interface ProductDetailFace {
    rotary_face: string;
    stationary_face: string;
    seal_code: string;
    rotary_face_2?: string;
    stationary_face_2?: string;
}

export interface ProductDetailTemp {
    material: string;
    min_temp: number;
    max_temp: number;
}

export interface ProductWithDetails extends Product {
    details: {
        technical_features?: Record<string, string>;
        seal_face_combinations?: (ProductDetailFace & { id: number; product_id: string })[];
        elastomer_temperatures?: (ProductDetailTemp & { id: number; product_id: string; elastomer_name: string; temperature_min: number; temperature_max: number; temperature_unit: string })[];
        dimensions?: Array<Record<string, string>>;
    }
}

export interface Application {
    id: number;
    slug: string;
    name: string;
    description?: string;
    image?: string;
    imageHint?: string;
    relevantProducts?: string[];
}

export interface SupportArticle {
    id: number;
    slug: string;
    title: string;
    content: string;
}

export const categories: ProductCategory[] = [
    { id: 1, name: 'Mechanical Seals', slug: 'mechanical-seals', description: 'High-performance seals for pumps and rotating equipment.' },
    { id: 2, name: 'Industrial Pumps', slug: 'industrial-pumps', description: 'A range of pumps for various industrial uses.' },
    { id: 3, name: 'Gaskets & O-Rings', slug: 'gaskets-and-o-rings', description: 'Static sealing solutions for a variety of applications.' },
    { id: 4, name: 'Oil seals', slug: 'oil-seals', description: 'Seals designed for retaining lubrication and preventing leaks in rotating shafts.' },
];

export const subCategories: ProductSubCategory[] = [
    { id: 1, category_id: 1, name: "Elastomeric Bellows Seals", slug: "elastomeric-bellows-seals" },
    { id: 2, category_id: 1, name: "Parallel Spring Diaphragm Seals", slug: "parallel-spring-diaphragm-seals" },
    { id: 3, category_id: 1, name: "Conical Spring Diaphragm Seals", slug: "conical-spring-diaphragm-seals" },
    { id: 4, category_id: 1, name: "Conical Spring O-Ring Seals", slug: "conical-spring-o-ring-seals" },
    { id: 5, category_id: 1, name: "Multiple Spring Seals", slug: "multiple-spring-seals" },
    { id: 6, category_id: 1, name: "Wave Spring Seals", slug: "wave-spring-seals" },
    { id: 7, category_id: 1, name: "PTFE Seals", slug: "ptfe-seals" },
    { id: 8, category_id: 1, name: "Parallel Spring O-Ring Seals", slug: "parallel-spring-o-ring-seals" },
];

export const products: ProductWithDetails[] = [
    {
        id: "type-600",
        slug: "type-600",
        name: "OPEN/TYPE 600",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/1-OPEN (TYPE 600).jpg",
        short_description: "The Sealergy Type 600 is a radially compact elastomer bellows design, highly suitable for water pump applications.",
        description: "The Sealergy Type 600  is a radially compact elastomer bellows design, highly suitable for water pump applications.\nThe design features an easy-to-install construction with a compact working length intended to suit common water pump seal chambers.\nThe sealing drive is provided by the elastomer drive grommet tightly gripping the shaft from a contact point under the coil end, providing a bi-directional &quot;non-pusher&quot; performance that minimises shaft fretting.\nSupplied with a Sealergy Type 600 boot-mounted stationary to suit common imperial housing sizes, the Sealergy Type 600 is highly suited to low-pressure light water circulation duties.\n\nEffective and easy-to-install design.\nHighly suited to low-pressure domestic and municipal water pump duties.\nSealergy Seals assembly provides a more integrated, robust, and resilient product compared to many market alternatives.\nThe ribbed profile to the sealing contact point of the stationary provides optimal grip into stationary recess with a sub-optimal surface finish.",
        details: {
            technical_features: {
                Pressure: "Up to 6 bar (87 psi)",
                "Non-Pusher": "Yes",
                "Bi-Directional": "Yes",
                "Elastomer Bellow": "Yes",
                "Equivalent to John Crane Type 6,Avon Type S": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 1,
                    product_id: "type-600",
                    rotary_face: "Regular Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "CV"
                },
                {
                    id: 2,
                    product_id: "type-600",
                    rotary_face: "Resin Carbon",
                    stationary_face: "Silicon Carbide",
                    seal_code: "RV"
                },
                {
                    id: 3,
                    product_id: "type-600",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 1,
                    product_id: "type-600",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 2,
                    product_id: "type-600",
                    material: "EPEM",
                    min_temp: -30,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -30,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 3,
                    product_id: "type-600",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    OPEN: "10MM",
                    D1: "25.9",
                    D2: "25.5",
                    L1: "7.65",
                    L2: "18.4"
                },
                {
                    OPEN: "12MM",
                    D1: "25.9",
                    D2: "25.5",
                    L1: "7.65",
                    L2: "18.4"
                },
                {
                    OPEN: "1/2&quot;",
                    D1: "25.9",
                    D2: "25.5",
                    L1: "7.65",
                    L2: "18.4"
                },
                {
                    OPEN: "14MM",
                    D1: "30.3",
                    D2: "30",
                    L1: "7.6",
                    L2: "20.8"
                },
                {
                    OPEN: "15MM",
                    D1: "30.3",
                    D2: "30",
                    L1: "7.6",
                    L2: "20.8"
                },
                {
                    OPEN: "16MM",
                    D1: "30.3",
                    D2: "30",
                    L1: "7.6",
                    L2: "20.8"
                },
                {
                    OPEN: "5/8&quot;",
                    D1: "30.3",
                    D2: "30",
                    L1: "7.6",
                    L2: "20.8"
                },
                {
                    OPEN: "18MM(D34)",
                    D1: "36.8",
                    D2: "34.5",
                    L1: "10",
                    L2: "23.3"
                },
                {
                    OPEN: "19MM(D34)",
                    D1: "36.7",
                    D2: "34",
                    L1: "10",
                    L2: "24"
                },
                {
                    OPEN: "20MM(D36)",
                    D1: "38.3",
                    D2: "36",
                    L1: "10",
                    L2: "23"
                },
                {
                    OPEN: "22MM",
                    D1: "42.4",
                    D2: "44",
                    L1: "9.7",
                    L2: "28"
                },
                {
                    OPEN: "24MM",
                    D1: "42.4",
                    D2: "44",
                    L1: "9.7",
                    L2: "28"
                },
                {
                    OPEN: "25MM",
                    D1: "42.5",
                    D2: "44",
                    L1: "9.7",
                    L2: "28"
                },
                {
                    OPEN: "28MM",
                    D1: "46.4",
                    D2: "48.3",
                    L1: "11.3",
                    L2: "30.8"
                },
                {
                    OPEN: "28MM(AVO N)",
                    D1: "46.4",
                    D2: "48.3",
                    L1: "11.3",
                    L2: "30.8"
                },
                {
                    OPEN: "30MM",
                    D1: "52.65",
                    D2: "52.35",
                    L1: "11",
                    L2: "32.85"
                },
                {
                    OPEN: "32MM",
                    D1: "52.65",
                    D2: "52.35",
                    L1: "11",
                    L2: "32.85"
                }
            ]
        }
    },
    {
        id: "type-301",
        slug: "type-301",
        name: "CLOSE/TYPE 301",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/2-CLOSE (TYPE 301).jpg",
        short_description: "Sealergy Seals Type 301 is an axially-compact elastomer bellows design, suitable for a wide variety of water pump applications.",
        description: "Sealergy Seals Type 301  is an axially-compact elastomer bellows design, suitable for a wide variety of water pump applications. The design features a high flexibility to readily accommodate service misalignment and shaft run-out.\nThe sealing drive is provided by the elastomer bellows tightly gripping the shaft from a contact point under the coil end, providing bi-directional &quot;non-pusher&quot; performance that minimises shaft fretting.\nSupplied with a Sealergy Seals Type 301 boot-mounted stationary, the Sealergy Seals Type 301 is designed to suit very short seal chambers with a wide radial clearance.\n\nThe very short rotary operating height allows installation in a wide range of equipment duties.\nA smooth profile to the sealing contact point of the boot provides optimal grip into the stationary recess with a sub-optimal surface finish.\nThe wide profile of the rotary face provides optimal sealing performance in slow to medium-speed pump applications",
        details: {
            technical_features: {
                Pressure: "Up to 6 bar (87 psi)",
                "Non-Pusher": "Yes",
                "Bi-Directional": "Yes",
                "Elastomer Bellow": "Yes",
                "Equivalent to John Crane Type 6,Avon Type M": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 4,
                    product_id: "type-301",
                    rotary_face: "Regular Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "CV"
                },
                {
                    id: 5,
                    product_id: "type-301",
                    rotary_face: "Resin Carbon",
                    stationary_face: "Silicon Carbide",
                    seal_code: "RV"
                },
                {
                    id: 6,
                    product_id: "type-301",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 7,
                    product_id: "type-301",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 4,
                    product_id: "type-301",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 5,
                    product_id: "type-301",
                    material: "EPEM",
                    min_temp: -30,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -30,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 6,
                    product_id: "type-301",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    CLOSE: "8MM",
                    D1: "20",
                    D2: "18",
                    L1: "6.6",
                    L2: "13.6"
                },
                {
                    CLOSE: "10MM",
                    D1: "25.85",
                    D2: "24.1",
                    L1: "7.55",
                    L2: "16.8"
                },
                {
                    CLOSE: "11MM",
                    D1: "25.85",
                    D2: "24.1",
                    L1: "7.55",
                    L2: "16.8"
                },
                {
                    CLOSE: "12MM",
                    D1: "25.85",
                    D2: "24.1",
                    L1: "7.55",
                    L2: "16.8"
                },
                {
                    CLOSE: "13MM",
                    D1: "26.4",
                    D2: "24.25",
                    L1: "8.65",
                    L2: "16.4"
                },
                {
                    CLOSE: "14MM",
                    D1: "30.5",
                    D2: "28.65",
                    L1: "7.75",
                    L2: "18"
                },
                {
                    CLOSE: "15MM",
                    D1: "32",
                    D2: "28.55",
                    L1: "10.2",
                    L2: "16.85"
                },
                {
                    CLOSE: "16MM",
                    D1: "32",
                    D2: "28.55",
                    L1: "10.2",
                    L2: "16.85"
                },
                {
                    CLOSE: "17MM",
                    D1: "36.95",
                    D2: "35.25",
                    L1: "10",
                    L2: "20.45"
                },
                {
                    CLOSE: "18MM",
                    D1: "36.95",
                    D2: "35.25",
                    L1: "10",
                    L2: "20.45"
                },
                {
                    CLOSE: "19MM",
                    D1: "36.95",
                    D2: "35.25",
                    L1: "10",
                    L2: "20.45"
                },
                {
                    CLOSE: "20MM",
                    D1: "38.2",
                    D2: "35.2",
                    L1: "10",
                    L2: "20.5"
                },
                {
                    CLOSE: "22MM",
                    D1: "42.1",
                    D2: "42.35",
                    L1: "10.75",
                    L2: "19"
                },
                {
                    CLOSE: "24MM",
                    D1: "42.1",
                    D2: "42.35",
                    L1: "10.75",
                    L2: "19"
                },
                {
                    CLOSE: "25MM",
                    D1: "42.1",
                    D2: "42.35",
                    L1: "10.75",
                    L2: "19"
                },
                {
                    CLOSE: "28MM",
                    D1: "52.5",
                    D2: "47.3",
                    L1: "10.5",
                    L2: "19.3"
                },
                {
                    CLOSE: "30MM",
                    D1: "52.75",
                    D2: "47.4",
                    L1: "10",
                    L2: "19.5"
                },
                {
                    CLOSE: "32MM",
                    D1: "52.35",
                    D2: "47.25",
                    L1: "10.45",
                    L2: "20.85"
                },
                {
                    CLOSE: "35MM",
                    D1: "63",
                    D2: "60.7",
                    L1: "10",
                    L2: "24"
                },
                {
                    CLOSE: "38MM",
                    D1: "68.5",
                    D2: "64.75",
                    L1: "12.75",
                    L2: "23.7"
                },
                {
                    CLOSE: "40MM",
                    D1: "68.5",
                    D2: "64.75",
                    L1: "12.75",
                    L2: "23.7"
                },
                {
                    CLOSE: "45MM",
                    D1: "73.55",
                    D2: "70.2",
                    L1: "13.3",
                    L2: "24.3"
                },
                {
                    CLOSE: "48MM",
                    D1: "70.75",
                    D2: "85",
                    L1: "12.2",
                    L2: "29.5"
                },
                {
                    CLOSE: "50MM",
                    D1: "70.75",
                    D2: "85",
                    L1: "12.2",
                    L2: "29.5"
                }
            ]
        }
    },
    {
        id: "type-601",
        slug: "type-601",
        name: "BELOW/TYPE 601",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/3-BELOW (TYPE 600).jpg",
        short_description: "The Sealergy Type 601 is a radially compact elastomer bellows design, highly suitable for water pump applications.",
        description: "The Sealergy Type 601  is a radially compact elastomer bellows design, highly suitable for water pump applications.\nThe design features an easy-to-install construction with a compact working length intended to suit common water pump seal chambers.\nThe sealing drive is provided by the elastomer drive grommet tightly gripping the shaft from a contact point under the coil end, providing a bi-directional &quot;non-pusher&quot; performance that minimises shaft fretting.\nSupplied with a Sealergy Type 601 boot-mounted stationary to suit common imperial housing sizes, the Sealergy Type 601 is highly suited to low-pressure light water circulation duties.\n\nEffective and easy-to-install design.\nHighly suited to low-pressure domestic and municipal water pump duties.\nSealergy Seals assembly provides a more integrated, robust, and resilient product compared to many market alternatives.\nThe ribbed profile to the sealing contact point of the stationary provides optimal grip into stationary recess with a sub-optimal surface finish.",
        details: {
            technical_features: {
                Pressure: "Up to 4 bar (87 psi)",
                "Non-Pusher": "Yes",
                "Bi-Directional": "Yes",
                "Elastomer Bellow": "Yes",
                "Equivalent to John Crane Type 6A,Avon Type F.": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 8,
                    product_id: "type-601",
                    rotary_face: "Regular Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "CV"
                },
                {
                    id: 9,
                    product_id: "type-601",
                    rotary_face: "Resin Carbon",
                    stationary_face: "Silicon Carbide",
                    seal_code: "RQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 7,
                    product_id: "type-601",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 8,
                    product_id: "type-601",
                    material: "EPEM",
                    min_temp: -30,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -30,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 9,
                    product_id: "type-601",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    BELOW: "12MM[S]",
                    D1: "25.7",
                    D2: "25.5",
                    L1: "6.2",
                    L2: "16.1"
                },
                {
                    BELOW: "12MM",
                    D1: "25.9",
                    D2: "25.4",
                    L1: "8.6",
                    L2: "19"
                },
                {
                    BELOW: "16MM",
                    D1: "30.55",
                    D2: "30.2",
                    L1: "7.6",
                    L2: "21.25"
                },
                {
                    BELOW: "18MM",
                    D1: "37.5",
                    D2: "34.4",
                    L1: "9.9",
                    L2: "24.5"
                },
                {
                    BELOW: "19MM",
                    D1: "37.1",
                    D2: "34.4",
                    L1: "9.8",
                    L2: "24.5"
                }
            ]
        }
    },
    {
        id: "stork-type-301",
        slug: "stork-type-301",
        name: "STORK/TYPE 301A",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/4-STORK (TYPE 301A).jpg",
        short_description: "Sealergy Seals Type Economic mechanical seal with small dimensions, used in large household pump productions.",
        description: "Sealergy Seals Type 301  is an axially-compact elastomer bellows design, suitable for a wide variety of water pump applications. The design features a high flexibility to readily accommodate service misalignment and shaft run-out.\nThe sealing drive is provided by the elastomer bellows tightly gripping the shaft from a contact point under the coil end, providing bi-directional &quot;non-pusher&quot; performance that minimises shaft fretting.\nSupplied with a Sealergy Seals Type 301 boot-mounted stationary, the Sealergy Seals Type 301 is designed to suit very short seal chambers with a wide radial clearance.\n\nThe very short rotary operating height allows installation in a wide range of equipment duties.\nA smooth profile to the sealing contact point of the boot provides optimal grip into the stationary recess with a sub-optimal surface finish.\nThe wide profile of the rotary face provides optimal sealing performance in slow to medium-speed pump applications",
        details: {
            technical_features: {
                Pressure: "Up to 6 bar (87 psi)",
                "Non-Pusher": "Yes",
                "Bi-Directional": "Yes",
                "Elastomer Bellow": "Yes",
                "Unbalanced.": "Yes",
                "Not dependent on the rotation direction. Single cylindrical spring.": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 10,
                    product_id: "stork-type-301",
                    rotary_face: "Regular Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "CV"
                },
                {
                    id: 11,
                    product_id: "stork-type-301",
                    rotary_face: "Resin Carbon",
                    stationary_face: "Silicon Carbide",
                    seal_code: "RV"
                },
                {
                    id: 12,
                    product_id: "stork-type-301",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 13,
                    product_id: "stork-type-301",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 10,
                    product_id: "stork-type-301",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 11,
                    product_id: "stork-type-301",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 12,
                    product_id: "stork-type-301",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    STORK: "14MM(D32)",
                    D1: "30.55",
                    D2: "32",
                    L1: "7.7",
                    L2: "16"
                },
                {
                    STORK: "15MM(D32)",
                    D1: "30.55",
                    D2: "32",
                    L1: "7.7",
                    L2: "16"
                },
                {
                    STORK: "16MM(D32)",
                    D1: "30.55",
                    D2: "32",
                    L1: "7.7",
                    L2: "16"
                },
                {
                    STORK: "14MM(D35)",
                    D1: "38.4",
                    D2: "35.3",
                    L1: "8.2",
                    L2: "17.8"
                },
                {
                    STORK: "15MM(D35)",
                    D1: "38.4",
                    D2: "35.3",
                    L1: "8.2",
                    L2: "17.8"
                },
                {
                    STORK: "16MM(D35)",
                    D1: "38.4",
                    D2: "35.3",
                    L1: "8.2",
                    L2: "17.8"
                },
                {
                    STORK: "16MM(D39)",
                    D1: "42.75",
                    D2: "39",
                    L1: "8",
                    L2: "19.5"
                },
                {
                    STORK: "18MM(D39)",
                    D1: "42.75",
                    D2: "39",
                    L1: "8",
                    L2: "19.5"
                },
                {
                    STORK: "19MM(D39)",
                    D1: "42.75",
                    D2: "39",
                    L1: "8",
                    L2: "19.5"
                },
                {
                    STORK: "20MM(D39)",
                    D1: "42.75",
                    D2: "39",
                    L1: "8",
                    L2: "19.5"
                },
                {
                    STORK: "24MM(D47)",
                    D1: "50.5",
                    D2: "47.45",
                    L1: "10",
                    L2: "20.5"
                },
                {
                    STORK: "25MM(D47)",
                    D1: "50.5",
                    D2: "47.45",
                    L1: "10",
                    L2: "20.5"
                },
                {
                    STORK: "28MM(D54)",
                    D1: "57.55",
                    D2: "54",
                    L1: "6.7",
                    L2: "22.8"
                },
                {
                    STORK: "30MM(D54)",
                    D1: "57.55",
                    D2: "54",
                    L1: "6.7",
                    L2: "22.8"
                },
                {
                    STORK: "32MM(D54)",
                    D1: "57.55",
                    D2: "54",
                    L1: "6.7",
                    L2: "22.8"
                }
            ]
        }
    },
    {
        id: "j1-oring-type-155",
        slug: "j1-oring-type-155",
        name: "J1 ORING/TYPE 155",
        primary_category_id: 1,
        primary_subcategory_id: 4,
        image: "/Individual Product Thumbnail/5-J1 BELLOW (TYPE 155).jpg",
        short_description: "The Sealergy Seals Type 155 seal is a resilient, 'O'-ring mounted \"pusher\" seal design.",
        description: "The Sealergy Seals Type 155** **seal is a resilient, 'O'-ring mounted &quot;pusher&quot; seal design with an 'O'-ring mounted sealing face in a narrow cross-section stainless steel pressed head.\nThe seal drive is provided by the conical spring tightly gripping the equipment shaft at its drive end. Conical spring seals are mono-directional and have differential part codes for clockwise or anti-clockwise operation.\nThe Sealergy Seals Type 155 complete seal is supplied with the Sealergy Seals Type 155 stationary to suit DIN24960/En12756 housing sizes.\n\nThe 'O'-ring mounted seal face offers enhanced versatility.\nCost effective seal option for light duty water circulators.\nCeramic seal face provides improved sealing performance compared to standard stainless steel.\nOffers high temperature capability when fitted with suitable 'O'-rings.\nSuitable for light duty applications.",
        details: {
            technical_features: {
                Pressure: "Up to 12 bar (174 psi)",
                "PUSHER TYPE": "Yes",
                "UNBALANCED SEAL": "Yes",
                "SINGLE CONICAL SPRING": "Yes",
                "REPLACABLE ORING TYPE": "Yes",
                "EQUIVALENT TO BURGMAN FN|ROTEN UNITEN 3*": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 14,
                    product_id: "j1-oring-type-155",
                    rotary_face: "Ceramic",
                    stationary_face: "Regular Carbon",
                    seal_code: "VC"
                },
                {
                    id: 15,
                    product_id: "j1-oring-type-155",
                    rotary_face: "Ceramic",
                    stationary_face: "Resin Carbon",
                    seal_code: "VR"
                },
                {
                    id: 16,
                    product_id: "j1-oring-type-155",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 13,
                    product_id: "j1-oring-type-155",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 14,
                    product_id: "j1-oring-type-155",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 15,
                    product_id: "j1-oring-type-155",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    J1: "12MM",
                    D1: "20.6",
                    D2: "24.2",
                    L1: "7.8",
                    L2: "26"
                },
                {
                    J1: "14MM",
                    D1: "23.3",
                    D2: "24.2",
                    L1: "7.1",
                    L2: "25.8"
                },
                {
                    J1: "15MM",
                    D1: "27.4",
                    D2: "28.5",
                    L1: "8.4",
                    L2: "30"
                },
                {
                    J1: "16MM",
                    D1: "27.4",
                    D2: "28.5",
                    L1: "8.4",
                    L2: "30"
                },
                {
                    J1: "17MM",
                    D1: "27.4",
                    D2: "28.5",
                    L1: "9",
                    L2: "30"
                },
                {
                    J1: "18MM",
                    D1: "31.5",
                    D2: "32.8",
                    L1: "10.1",
                    L2: "36.2"
                },
                {
                    J1: "19MM",
                    D1: "31.5",
                    D2: "32.8",
                    L1: "10.1",
                    L2: "36.2"
                },
                {
                    J1: "20MM",
                    D1: "32.5",
                    D2: "32.8",
                    L1: "10.1",
                    L2: "38.2"
                },
                {
                    J1: "22MM",
                    D1: "35.9",
                    D2: "37.2",
                    L1: "8.7",
                    L2: "39"
                },
                {
                    J1: "24MM",
                    D1: "38.4",
                    D2: "38.4",
                    L1: "9.8",
                    L2: "36.2"
                },
                {
                    J1: "25MM",
                    D1: "38.4",
                    D2: "38.4",
                    L1: "9.8",
                    L2: "37.4"
                },
                {
                    J1: "28MM",
                    D1: "43.3",
                    D2: "44.5",
                    L1: "11.5",
                    L2: "45"
                },
                {
                    J1: "30MM",
                    D1: "43.4",
                    D2: "44.6",
                    L1: "11.4",
                    L2: "43.5"
                },
                {
                    J1: "32MM",
                    D1: "44.4",
                    D2: "47.6",
                    L1: "11.9",
                    L2: "42.7"
                },
                {
                    J1: "38MM",
                    D1: "60.3",
                    D2: "58.2",
                    L1: "10",
                    L2: "52"
                },
                {
                    J1: "40MM",
                    D1: "60.3",
                    D2: "58.2",
                    L1: "10",
                    L2: "52"
                }
            ]
        }
    },
    {
        id: "j1-bellow-type-155a",
        slug: "j1-bellow-type-155a",
        name: "J1 BELLOW/TYPE 155A",
        primary_category_id: 1,
        primary_subcategory_id: 3,
        image: "/Individual Product Thumbnail/6-J1 BELLOW (TYPE 155A).jpg",
        short_description: "The Sealergy Seals Type 155A seal is a 'Duck bellow mounted' \"pusher\" seal design.",
        description: "The Sealergy Seals Type 155A seal is a 'Duck bellow mounted’ &quot;pusher&quot; seal design with a sealing face Ring  stainless steel pressed head.\nThe seal drive is provided by the conical spring tightly gripping the equipment shaft at its drive end. Conical spring seals are mono-directional and have differential part codes for clockwise or anti-clockwise operation.\nThe Sealergy Seals Type 155A complete seal is supplied with the Sealergy Seals Type 155A stationary to suit DIN24960/En12756 housing sizes.\n\nThe 'Duck bellow’ mounted seal face offers enhanced Duriablity.\nCost effective seal option for light duty water circulators.\nCeramic seal face provides improved sealing performance compared to standard stainless steel.\nOffers high temperature capability when fitted with suitable Duck Bellow\nSuitable for light duty applications.",
        details: {
            technical_features: {
                Pressure: "Up to 12 bar (174 psi)",
                "PUSHER TYPE": "Yes",
                "UNBALANCED SEAL": "Yes",
                "SINGLE CONICAL SPRING": "Yes",
                "DUCK BELLOW DESIGN": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 17,
                    product_id: "j1-bellow-type-155a",
                    rotary_face: "Ceramic",
                    stationary_face: "Regular Carbon",
                    seal_code: "VC"
                },
                {
                    id: 18,
                    product_id: "j1-bellow-type-155a",
                    rotary_face: "Ceramic",
                    stationary_face: "Resin Carbon",
                    seal_code: "VR"
                },
                {
                    id: 19,
                    product_id: "j1-bellow-type-155a",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 16,
                    product_id: "j1-bellow-type-155a",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 17,
                    product_id: "j1-bellow-type-155a",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 18,
                    product_id: "j1-bellow-type-155a",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    J1: "12MM",
                    D1: "20.6",
                    D2: "24.2",
                    L1: "7.8",
                    L2: "26"
                },
                {
                    J1: "14MM",
                    D1: "23.3",
                    D2: "24.2",
                    L1: "7.1",
                    L2: "25.8"
                },
                {
                    J1: "15MM",
                    D1: "27.4",
                    D2: "28.5",
                    L1: "8.4",
                    L2: "30"
                },
                {
                    J1: "16MM",
                    D1: "27.4",
                    D2: "28.5",
                    L1: "8.4",
                    L2: "30"
                },
                {
                    J1: "17MM",
                    D1: "27.4",
                    D2: "28.5",
                    L1: "9",
                    L2: "30"
                },
                {
                    J1: "18MM",
                    D1: "31.5",
                    D2: "32.8",
                    L1: "10.1",
                    L2: "36.2"
                },
                {
                    J1: "19MM",
                    D1: "31.5",
                    D2: "32.8",
                    L1: "10.1",
                    L2: "36.2"
                },
                {
                    J1: "20MM",
                    D1: "32.5",
                    D2: "32.8",
                    L1: "10.1",
                    L2: "38.2"
                },
                {
                    J1: "22MM",
                    D1: "35.9",
                    D2: "37.2",
                    L1: "8.7",
                    L2: "39"
                },
                {
                    J1: "24MM",
                    D1: "38.4",
                    D2: "38.4",
                    L1: "9.8",
                    L2: "36.2"
                },
                {
                    J1: "25MM",
                    D1: "38.4",
                    D2: "38.4",
                    L1: "9.8",
                    L2: "37.4"
                },
                {
                    J1: "28MM",
                    D1: "43.3",
                    D2: "44.5",
                    L1: "11.5",
                    L2: "45"
                },
                {
                    J1: "30MM",
                    D1: "43.4",
                    D2: "44.6",
                    L1: "11.4",
                    L2: "43.5"
                },
                {
                    J1: "32MM",
                    D1: "44.4",
                    D2: "47.6",
                    L1: "11.9",
                    L2: "42.7"
                },
                {
                    J1: "38MM",
                    D1: "60.3",
                    D2: "58.2",
                    L1: "10",
                    L2: "52"
                },
                {
                    J1: "40MM",
                    D1: "60.3",
                    D2: "58.2",
                    L1: "10",
                    L2: "52"
                }
            ]
        }
    },
    {
        id: "honda-type-70",
        slug: "honda-type-70",
        name: "HONDA/TYPE 700",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/7-HONDA (TYPE 70).jpg",
        short_description: "The Sealergy Seals Type 70 is a stationary-mounted highly compact elastomer bellows design.",
        description: "The Sealergy Seals Type 70 is a stationary-mounted highly compact elastomer bellows design, highly suitable for high-shaft speed water pump applications.\nThe design features a boot-mounted rotary counter ring that is intended to be inserted into a recess in the equipment impeller, with the metal sprung unit pressed into the static pump housing.\nThe shaft clearance on both sealing faces enables one size to be used on a number of shaft sizes. No part of this design contacts the pump shaft so is therefore bi-directional, and the spring is static and removed from centrifugal influences allowing very high rotational speeds to be sealed.\nSupplied with a Sealergy Seals Type 70 boot-mounted stationary highly suited to low-pressure light water circulation duties.\n\nThis is a multi-spring, high-pressure seal with O-rings or PTFE V-packings as secondary seals.\nIt is a bi-directional pusher-type mechanical seal, making it suitable for a variety of elastomers.\nThe design is available in both an unbalanced version for low-pressure applications and a balanced version for high-pressure applications.\nIt can be configured as a double seal for handling toxic or hazardous liquids.\nIt is commonly used for a wide range of clear, non-abrasive liquids in many types of equipment.",
        details: {
            technical_features: {
                Unbalanced: "Yes",
                "Single spring": "Yes",
                "Independent of direction of rotation": "Yes",
                "Stationary spring-loaded unit": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 20,
                    product_id: "honda-type-70",
                    rotary_face: "Ceramic",
                    stationary_face: "Regular Carbon",
                    seal_code: "VC"
                },
                {
                    id: 21,
                    product_id: "honda-type-70",
                    rotary_face: "Ceramic",
                    stationary_face: "Resin Carbon",
                    seal_code: "VR"
                },
                {
                    id: 22,
                    product_id: "honda-type-70",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 19,
                    product_id: "honda-type-70",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 20,
                    product_id: "honda-type-70",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 21,
                    product_id: "honda-type-70",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    HONDA: "1/2&quot;",
                    D1: "24.4",
                    D2: "28.65",
                    L1: "5.8",
                    L2: "17"
                },
                {
                    HONDA: "5/8&quot;",
                    D1: "30.45",
                    D2: "41.6",
                    L1: "7.6",
                    L2: "22.55"
                },
                {
                    HONDA: "3/4&quot;",
                    D1: "35.55",
                    D2: "45.3",
                    L1: "5.2",
                    L2: "23.8"
                },
                {
                    HONDA: "25MM",
                    D1: "44.3",
                    D2: "52.65",
                    L1: "7.1",
                    L2: "27.75"
                }
            ]
        }
    },
    {
        id: "robin-type-560",
        slug: "robin-type-560",
        name: "ROBIN/TYPE 560",
        primary_category_id: 1,
        primary_subcategory_id: 2,
        image: "/Individual Product Thumbnail/8-ROBIN (TYPE 560).jpg",
        short_description: "The Sealergy Seals Type 560 is a resilient, rubber diaphragm mounted parallel spring seal design.",
        description: "The Sealergy Seals Type 560 is a resilient, rubber diaphragm mounted parallel spring seal design with self-adjusting head to accommodate minor shaft misalignment and run-out.\nThe seal drive is provided by the diaphragm bellows tightly gripping the shaft and providing positive drive to the seal head and sealing face. The Sealergy Seals diaphragm seal designs are bi-directional &quot;pusher&quot; seals that minimise shaft fretting as the spring is constantly providing energising force to the shaft contact point and sealing face.\nSupplied with a Sealergy Seals Type 20 boot-mounted stationary to suit common metric and imperial UK and European extended length seal chambers.\n\nThis seal is a self-adjusting elastomer bellows seal that can compensate for shaft misalignment and axial movement.\nIt is suitable for a wide range of applications, including clean water, wastewater, glycols, and oils.\nThe design of the seal allows for the interchangeability of face materials without modifying dimensions.\nIt is available in single and dual seal arrangements for various requirements.\nThe seal is recommended for use in industrial, submersible, engine, and circulating pumps.",
        details: {
            technical_features: {
                "Single seal": "Yes",
                "Loosely inserted seal face provides self-adjusting capability": "Yes",
                "In-house manufactured sliding parts": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 23,
                    product_id: "robin-type-560",
                    rotary_face: "Ceramic",
                    stationary_face: "Regular Carbon",
                    seal_code: "VC"
                },
                {
                    id: 24,
                    product_id: "robin-type-560",
                    rotary_face: "Ceramic",
                    stationary_face: "Resin Carbon",
                    seal_code: "VR"
                },
                {
                    id: 25,
                    product_id: "robin-type-560",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 26,
                    product_id: "robin-type-560",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 22,
                    product_id: "robin-type-560",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 23,
                    product_id: "robin-type-560",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 24,
                    product_id: "robin-type-560",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    ROBIN: "11MM",
                    D1: "26",
                    D2: "22.6",
                    L1: "5",
                    L2: "29"
                },
                {
                    ROBIN: "12MM",
                    D1: "26",
                    D2: "22.6",
                    L1: "5",
                    L2: "29"
                },
                {
                    ROBIN: "14MM",
                    D1: "28.5",
                    D2: "26.4",
                    L1: "7",
                    L2: "29"
                },
                {
                    ROBIN: "15MM",
                    D1: "30.2",
                    D2: "26.4",
                    L1: "6.6",
                    L2: "29"
                },
                {
                    ROBIN: "16MM",
                    D1: "30.2",
                    D2: "26.4",
                    L1: "6.6",
                    L2: "29"
                },
                {
                    ROBIN: "17MM",
                    D1: "35",
                    D2: "29.1",
                    L1: "10",
                    L2: "34"
                },
                {
                    ROBIN: "18MM",
                    D1: "35.2",
                    D2: "29.7",
                    L1: "9.7",
                    L2: "34"
                },
                {
                    ROBIN: "19MM",
                    D1: "35.2",
                    D2: "29.7",
                    L1: "9.7",
                    L2: "34"
                },
                {
                    ROBIN: "20MM",
                    D1: "38.3",
                    D2: "33",
                    L1: "10",
                    L2: "34"
                },
                {
                    ROBIN: "22MM",
                    D1: "38.3",
                    D2: "33",
                    L1: "10",
                    L2: "34"
                },
                {
                    ROBIN: "24MM",
                    D1: "42.4",
                    D2: "39",
                    L1: "9.6",
                    L2: "46.5"
                },
                {
                    ROBIN: "25MM",
                    D1: "42.4",
                    D2: "39",
                    L1: "9.6",
                    L2: "46.5"
                },
                {
                    ROBIN: "1&quot;",
                    D1: "41.5",
                    D2: "42.2",
                    L1: "9.3",
                    L2: "41"
                },
                {
                    ROBIN: "28MM",
                    D1: "46.2",
                    D2: "42",
                    L1: "11.2",
                    L2: "47"
                },
                {
                    ROBIN: "30MM",
                    D1: "48.2",
                    D2: "45.3",
                    L1: "10.5",
                    L2: "32MM"
                },
                {
                    ROBIN: "48.2",
                    D1: "45.3",
                    D2: "10.3",
                    L1: "67",
                    L2: "35MM"
                },
                {
                    ROBIN: "54.4",
                    D1: "48.6",
                    D2: "11",
                    L1: "62",
                    L2: "38MM(D52)"
                },
                {
                    ROBIN: "56",
                    D1: "56",
                    D2: "9",
                    L1: "59",
                    L2: "38MM"
                },
                {
                    ROBIN: "56",
                    D1: "52",
                    D2: "9",
                    L1: "58",
                    L2: "40MM"
                },
                {
                    ROBIN: "61.5",
                    D1: "56.4",
                    D2: "11",
                    L1: "72",
                    L2: "41MM"
                },
                {
                    ROBIN: "61.5",
                    D1: "56.4",
                    D2: "11",
                    L1: "72",
                    L2: "42MM"
                },
                {
                    ROBIN: "61.5",
                    D1: "56.4",
                    D2: "11",
                    L1: "72",
                    L2: "43MM(D61)"
                },
                {
                    ROBIN: "63.4",
                    D1: "61.1",
                    D2: "12.6",
                    L1: "69.3",
                    L2: "44MM(D61)"
                },
                {
                    ROBIN: "63.4",
                    D1: "61.1",
                    D2: "12.6",
                    L1: "69.3",
                    L2: "45MM(D61)"
                },
                {
                    ROBIN: "63.4",
                    D1: "61.1",
                    D2: "12.6",
                    L1: "69.3",
                    L2: "44MM(D65)"
                },
                {
                    ROBIN: "63.4",
                    D1: "61.3",
                    D2: "12.5",
                    L1: "69.3",
                    L2: "45MM(D65)"
                },
                {
                    ROBIN: "63.4",
                    D1: "61.3",
                    D2: "12.5",
                    L1: "69.3",
                    L2: "48MM"
                },
                {
                    ROBIN: "70.5",
                    D1: "66.5",
                    D2: "12.2",
                    L1: "72",
                    L2: "50MM"
                },
                {
                    ROBIN: "70.5",
                    D1: "66.5",
                    D2: "12.2",
                    L1: "72",
                    L2: "53MM"
                },
                {
                    ROBIN: "73.5",
                    D1: "71.6",
                    D2: "13",
                    L1: "93",
                    L2: "55MM"
                },
                {
                    ROBIN: "73.3",
                    D1: "71.6",
                    D2: "13",
                    L1: "107",
                    L2: "60MM"
                },
                {
                    ROBIN: "80",
                    D1: "80",
                    D2: "12",
                    L1: "109",
                    L2: "65MM"
                },
                {
                    ROBIN: "83",
                    D1: "82",
                    D2: "14",
                    L1: "94",
                    L2: "70MM"
                },
                {
                    ROBIN: "92.8",
                    D1: "90",
                    D2: "14",
                    L1: "111",
                    L2: "75MM"
                },
                {
                    ROBIN: "97.5",
                    D1: "97",
                    D2: "11.6",
                    L1: "117",
                    L2: "3&quot; (76MM)"
                },
                {
                    ROBIN: "97.7",
                    D1: "97",
                    D2: "11.5",
                    L1: "117",
                    L2: "57MM"
                }
            ]
        }
    },
    {
        id: "new-robin-type-560a",
        slug: "new-robin-type-560a",
        name: "NEW ROBIN/TYPE 560A",
        primary_category_id: 1,
        primary_subcategory_id: 2,
        image: "/Individual Product Thumbnail/9-NEW ROBIN (TYPE 560A).jpg",
        short_description: "Large series rubber bellows mechanical seal. Working pressure up to 12 bar. Independent of rotation direction.",
        description: "The Sealergy Seals Type 560A is a large series mechanical seal with a simple yet effective design that is easy to assemble. The special spring arrangement allows a short axial installation length. This advantage is combined with an increased working pressure capability of up to 12 bar (174 PSI). The spring is free from torque transmission.\n\nThis seal features a rubber bellows that is not subjected to torsional stress, which helps it compensate for shaft misalignment and axial movement.\nIt can be configured with various face materials without modifying the seal's dimensions, allowing for universal application opportunities.\nIt is suitable for a diverse range of industries, including industrial, chemical, and food processing.\nThe seal is highly recommended for use in pumps that handle clean water, sewage water, oils, and other moderately corrosive fluids.\nIt is widely used in industrial pumps, submersible pumps, engine pumps, and circulating pumps",
        details: {
            technical_features: {
                "Rubber bellows mechanical seals": "Yes",
                Unbalanced: "Yes",
                "Single spring": "Yes",
                "Independent of direction of rotation": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 27,
                    product_id: "new-robin-type-560a",
                    rotary_face: "Ceramic",
                    stationary_face: "Regular Carbon",
                    seal_code: "VC"
                },
                {
                    id: 28,
                    product_id: "new-robin-type-560a",
                    rotary_face: "Ceramic",
                    stationary_face: "Resin Carbon",
                    seal_code: "VR"
                },
                {
                    id: 29,
                    product_id: "new-robin-type-560a",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 25,
                    product_id: "new-robin-type-560a",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 26,
                    product_id: "new-robin-type-560a",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 27,
                    product_id: "new-robin-type-560a",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    "NEW ROBIN": "12MM",
                    D1: "26",
                    D2: "22",
                    L1: "5.5",
                    L2: "28"
                },
                {
                    "NEW ROBIN": "14MM",
                    D1: "30.5",
                    D2: "31.5",
                    L1: "7.9",
                    L2: "35.5"
                },
                {
                    "NEW ROBIN": "15MM",
                    D1: "30.5",
                    D2: "31.5",
                    L1: "7.9",
                    L2: "35.5"
                },
                {
                    "NEW ROBIN": "16M",
                    D1: "30.5",
                    D2: "31.5",
                    L1: "7.9",
                    L2: "35.5"
                },
                {
                    "NEW ROBIN": "18MM",
                    D1: "33",
                    D2: "32",
                    L1: "7.5",
                    L2: "30"
                },
                {
                    "NEW ROBIN": "20MM",
                    D1: "35",
                    D2: "32",
                    L1: "7.5",
                    L2: "30"
                },
                {
                    "NEW ROBIN": "22MM",
                    D1: "37",
                    D2: "39",
                    L1: "7.5",
                    L2: "31"
                },
                {
                    "NEW ROBIN": "25MM",
                    D1: "40",
                    D2: "42",
                    L1: "7.5",
                    L2: "32"
                }
            ]
        }
    },
    {
        id: "double-robin-type-560d",
        slug: "double-robin-type-560d",
        name: "DOUBLE ROBIN/TYPE 560D",
        primary_category_id: 1,
        primary_subcategory_id: 2,
        image: "/Individual Product Thumbnail/10-DOUBLE ROBIN (TYPE 560D).jpg",
        short_description: "Dual seal in back-to-back arrangement. Good chemical resistance. Suitable for toxic or hazardous liquids.",
        description: "The ED560 is a dual seal in a back-to-back arrangement with an EA560 base. Therefore, the seal combines the advantages of the EA560 with the advantages of a dual seal.\n\nThe dual-seal design offers enhanced safety and reliability, making it suitable for sealing toxic or hazardous liquids, as it helps prevent leakage into the environment.\nIt is a spring-loaded, balanced seal that is suitable for use in medium-pressure applications.\nThe seal is designed to handle fluids with solids and has good chemical resistance, combining the advantages of the EA560 single seal with the added safety of a dual seal.\nThe seal can be configured with a variety of face materials and elastomers to suit different fluids and operational conditions.\nIt is widely used in industrial pumps, including those for water, wastewater, chemicals, and oils.",
        details: {
            technical_features: {
                "Dual seal": "Yes",
                "Good chemical resistance and ability to handle solids": "Yes",
                "In-house manufactured sliding parts": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 30,
                    product_id: "double-robin-type-560d",
                    rotary_face: "Ceramic",
                    stationary_face: "Regular Carbon",
                    rotary_face_2: "Ceramic",
                    stationary_face_2: "Regular Carbon",
                    seal_code: "VCVC"
                },
                {
                    id: 31,
                    product_id: "double-robin-type-560d",
                    rotary_face: "Ceramic",
                    stationary_face: "Resin Carbon",
                    rotary_face_2: "Ceramic",
                    stationary_face_2: "Resin Carbon",
                    seal_code: "VRVR"
                },
                {
                    id: 32,
                    product_id: "double-robin-type-560d",
                    rotary_face: "Ceramic",
                    stationary_face: "Regular Carbon",
                    rotary_face_2: "Silicon Carbide",
                    stationary_face_2: "Silicon Carbide",
                    seal_code: "VCQQ"
                },
                {
                    id: 33,
                    product_id: "double-robin-type-560d",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    rotary_face_2: "Silicon Carbide",
                    stationary_face_2: "Silicon Carbide",
                    seal_code: "QQQQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 28,
                    product_id: "double-robin-type-560d",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 29,
                    product_id: "double-robin-type-560d",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 30,
                    product_id: "double-robin-type-560d",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    "DOUBLE ROBIN MG6 MOULD": "20MM",
                    D1: "38.55",
                    D2: "33.2",
                    L1: "9.9",
                    L2: "52.5",
                    D3: "44.35",
                    L3: "8.4"
                },
                {
                    "DOUBLE ROBIN MG6 MOULD": "25MM",
                    D1: "44.3",
                    D2: "39.4",
                    L1: "8.5",
                    L2: "49.8",
                    D3: "50.6",
                    L3: "8.25"
                },
                {
                    "DOUBLE ROBIN MG6 MOULD": "30MM",
                    D1: "50.55",
                    D2: "45.45",
                    L1: "9.3",
                    L2: "53.3",
                    D3: "57.5",
                    L3: "8.5"
                },
                {
                    "DOUBLE ROBIN MG6 MOULD": "35MM",
                    D1: "50.8",
                    D2: "48.5",
                    L1: "8",
                    L2: "66.3",
                    D3: "57.9",
                    L3: "9.9"
                }
            ]
        }
    },
    {
        id: "double-robin-mg1-type-560m",
        slug: "double-robin-mg1-type-560m",
        name: "DOUBLE ROBIN MG1/TYPE 560M",
        primary_category_id: 1,
        primary_subcategory_id: 2,
        image: "/Individual Product Thumbnail/11-DOUBLE ROBIN MG1 (TYPE 560M).jpg",
        short_description: "Double mechanical seal compatible with Burgmann MG1. Bi-directional. Suitable for hazardous liquids. Pressure up to 6 bar.",
        description: "A &quot;Sealergy Seals Type Double Robin MG1&quot; is a double mechanical seal that uses an elastomer bellows design and is compatible with the industry-standard Burgmann MG1 seal type. The &quot;Double Robin&quot; designation specifies that it is a dual-seal configuration, which offers enhanced safety and reliability over a standard single seal.\nThis type of seal is used for demanding industrial applications where reliability is critical. Key uses include:\n\nA double mechanical seal uses two sets of sealing faces to contain a fluid or gas. This design is ideal for hazardous, toxic, or flammable fluids, as it provides a backup in case the primary seal fails, preventing leakage into the atmosphere.\nA buffer or barrier fluid is circulated between the seals, which lubricates the seal faces and removes heat, reducing wear and tear. This process extends the seal's operational life and minimizes the risk of dry running, which can cause premature failure.\nThe seal is designed to handle corrosive and abrasive media, which is common in applications like wastewater treatment and the pulp and paper industry. The barrier fluid protects the seal faces from damage caused by the pumped fluid itself.\nThe MG1 design is independent of the shaft's direction of rotation, making it a versatile and reliable choice for various pumps and rotating equipment. It is suitable for a wide range of industries, including chemical processing, oil and gas, pharmaceuticals, and wastewater treatment.\nWhile the initial cost may be higher than a single seal, the increased durability and reduced risk of downtime or equipment damage lead to lower maintenance and operational costs over time.",
        details: {
            technical_features: {
                Pressure: "Up to 6 bar (87 psi).",
                "Non-Pusher.": "Yes",
                "Bi-Directional.": "Yes",
                "Elastomer Bellow.": "Yes",
                "Equivalent to John Crane Type 6, Avon Type S.": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 34,
                    product_id: "double-robin-mg1-type-560m",
                    rotary_face: "Ceramic",
                    stationary_face: "Regular Carbon",
                    seal_code: "VC"
                },
                {
                    id: 35,
                    product_id: "double-robin-mg1-type-560m",
                    rotary_face: "Ceramic",
                    stationary_face: "Resin Carbon",
                    seal_code: "VR"
                },
                {
                    id: 36,
                    product_id: "double-robin-mg1-type-560m",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 31,
                    product_id: "double-robin-mg1-type-560m",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 32,
                    product_id: "double-robin-mg1-type-560m",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 33,
                    product_id: "double-robin-mg1-type-560m",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    "DOUBLE ROBIN": "12MM",
                    D1: "26.45",
                    D2: "23.25",
                    L1: "5.6",
                    L2: "47.1"
                },
                {
                    "DOUBLE ROBIN": "14MM",
                    D1: "30.55",
                    D2: "26.5",
                    L1: "6.35",
                    L2: "46.8"
                },
                {
                    "DOUBLE ROBIN": "15MM",
                    D1: "30.55",
                    D2: "26.5",
                    L1: "6.35",
                    L2: "46.8"
                },
                {
                    "DOUBLE ROBIN": "16MM",
                    D1: "30.55",
                    D2: "26.5",
                    L1: "6.35",
                    L2: "46.8"
                },
                {
                    "DOUBLE ROBIN": "17MM",
                    D1: "36.2",
                    D2: "33.2",
                    L1: "7.35",
                    L2: "55"
                },
                {
                    "DOUBLE ROBIN": "18MM",
                    D1: "36.2",
                    D2: "33.2",
                    L1: "7.35",
                    L2: "55"
                },
                {
                    "DOUBLE ROBIN": "19MM",
                    D1: "36.2",
                    D2: "33.2",
                    L1: "7.35",
                    L2: "55"
                },
                {
                    "DOUBLE ROBIN": "20MM",
                    D1: "36.2",
                    D2: "33.2",
                    L1: "7.35",
                    L2: "55"
                },
                {
                    "DOUBLE ROBIN": "25MM",
                    D1: "40.3",
                    D2: "39.3",
                    L1: "9.9",
                    L2: "52.8"
                },
                {
                    "DOUBLE ROBIN": "28MM",
                    D1: "56.55",
                    D2: "42.55",
                    L1: "8.35",
                    L2: "55.1"
                },
                {
                    "DOUBLE ROBIN": "30MM",
                    D1: "45.6",
                    D2: "45.45",
                    L1: "9",
                    L2: "52"
                },
                {
                    "DOUBLE ROBIN": "35MM",
                    D1: "50.85",
                    D2: "48.55",
                    L1: "8.1",
                    L2: "67.65"
                }
            ]
        }
    },
    {
        id: "crane-type-2",
        slug: "crane-type-2",
        name: "CRANE/TYPE CR2",
        primary_category_id: 1,
        primary_subcategory_id: 2,
        image: "/Individual Product Thumbnail/12-CRANE (TYPE 2).jpg",
        short_description: "Hydraulically balanced rubber diaphragm parallel spring seal. Mechanical drive eliminates overstressing. Single-coil non-clogging spring.",
        description: "The Sealergy Seals Type 2 is a robust, hydraulically balanced rubber diaphragm mounted parallel spring seal design with increased drive contact area from the shaft to the head to minimise component wear and hang-up.\nThe seal drive is provided by the diaphragm bellows tightly gripping the shaft and providing positive drive to the seal head and sealing face. The Sealergy Seals diaphragm seal designs are bi-directional &quot;pusher&quot; seals that minimise shaft fretting as the spring is constantly providing energising force to the shaft contact point and sealing face.\nSupplied with a Sealergy Seals Type 2 boot-mounted stationary to suit common market regular-length seal chambers.\n\n&quot;Crane type&quot; seals are a widely recognized industry standard, making them easily interchangeable with seals from many different manufacturers. This simplifies procurement and replacement.\nJohn Crane offers numerous seal types, including the Type 1, Type 2, and Type 21. These seals are known for their robust elastomer bellows designs, which are effective in a variety of applications.\nThese types of seals are designed with features like single-coil springs to resist clogging and flexible bellows that compensate for shaft misalignment and run-out, ensuring reliable performance in general-duty applications.\n&quot;Crane type&quot; mechanical seals are a popular choice for a variety of equipment, including centrifugal pumps, mixers, and other rotating equipment, handling fluids like water, oils, and mild chemicals.",
        details: {
            technical_features: {
                "Mechanical drive - Eliminates overstressing of the elastomer be lows": "Yes",
                "Special balancing - A lows operation at higher pressures": "Yes",
                "Non-clogging, single-coil spring - Not affected by buildup of solid.": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 37,
                    product_id: "crane-type-2",
                    rotary_face: "Ceramic",
                    stationary_face: "Regular Carbon",
                    seal_code: "VC"
                },
                {
                    id: 38,
                    product_id: "crane-type-2",
                    rotary_face: "Ceramic",
                    stationary_face: "Resin Carbon",
                    seal_code: "VR"
                },
                {
                    id: 39,
                    product_id: "crane-type-2",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 34,
                    product_id: "crane-type-2",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 35,
                    product_id: "crane-type-2",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 36,
                    product_id: "crane-type-2",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    CRANE: "18MM",
                    D1: "38.5",
                    D2: "37.7",
                    L1: "10.25",
                    L2: "35.5"
                },
                {
                    CRANE: "19MM",
                    D1: "38.5",
                    D2: "37.7",
                    L1: "10.25",
                    L2: "35.5"
                },
                {
                    CRANE: "20MM",
                    D1: "38.5",
                    D2: "37.7",
                    L1: "10.25",
                    L2: "35.5"
                },
                {
                    CRANE: "25MM",
                    D1: "40.3",
                    D2: "45.2",
                    L1: "9.9",
                    L2: "42.1"
                },
                {
                    CRANE: "28MM",
                    D1: "45.45",
                    D2: "48.3",
                    L1: "11.25",
                    L2: "52.2"
                },
                {
                    CRANE: "30MM",
                    D1: "48.35",
                    D2: "52",
                    L1: "10.1",
                    L2: "56"
                },
                {
                    CRANE: "32MM",
                    D1: "51.5",
                    D2: "57.4",
                    L1: "12.25",
                    L2: "62"
                },
                {
                    CRANE: "35MM",
                    D1: "54.75",
                    D2: "61.2",
                    L1: "10.9",
                    L2: "64"
                },
                {
                    CRANE: "38MM",
                    D1: "57.7",
                    D2: "62.8",
                    L1: "12.25",
                    L2: "63.5"
                },
                {
                    CRANE: "40MM",
                    D1: "60.7",
                    D2: "62.8",
                    L1: "12.6",
                    L2: "63.5"
                },
                {
                    CRANE: "41MM",
                    D1: "61",
                    D2: "66.7",
                    L1: "12.8",
                    L2: "74"
                },
                {
                    CRANE: "42MM",
                    D1: "63.75",
                    D2: "69.2",
                    L1: "11.1",
                    L2: "74"
                },
                {
                    CRANE: "45MM",
                    D1: "63.75",
                    D2: "69.2",
                    L1: "11.1",
                    L2: "74"
                }
            ]
        }
    },
    {
        id: "mg9-type-mg9",
        slug: "mg9-type-mg9",
        name: "MG9/TYPE MG9",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/13-MG9 (TYPE 9).jpg",
        short_description: "Modular elastomer bellows seal for plain shafts. Single and dual seal. US Patent No. 6,220,601. Available in metric and inch sizes.",
        description: "A modular principle comprising a bellows unit for each shaft diameter and a correspondingly long spring (tapered or cylindrical spring) for individual length compensation regarding l1K, l1N and other installation lengths.\nThe MG9 can also be used as a multiple seal in tandem or in a back-to-back arrange­ment. In­stal­la­tion  pro­pos­als can be supplied on request.\nThe entire MG9 series is avail­able in metric and inch sizes.\n\nThe MG9 is a highly versatile seal suitable for a wide variety of applications, including water, chemicals, oils, and other media. It is often used in centrifugal pumps, piping pumps, sewage pumps, and in the chemical, pulp and paper, and food industries.\nThe seal's compact design and small outer diameter allow it to fit into tight installation spaces, making it a good choice for equipment with limited room.\nThe elastomer bellows and independent spring design prevent the spring from twisting and allow the seal to handle axial movement and compensate for shaft run-out. This design also provides a high degree of flexibility and dependability.\nThe compact structure and compatibility with various equipment make the MG9 easy to install and maintain, which can reduce downtime and maintenance costs.\nThe MG9 can be used as a single or dual seal and is available in metric and inch sizes, as well as a variety of materials for the seal faces, elastomers, and metal parts. This allows it to be customized to meet specific operating conditions.",
        details: {
            technical_features: {
                "For plain shafts": "Yes",
                "Single and dual seal": "Yes",
                "Elastomer bellows rotating": "Yes",
                Balanced: "Yes",
                "Independent of direction of rotation": "Yes",
                "No torsion on bellows and spring": "Yes",
                "Conical or cylindrical spring": "Yes",
                "Metric and inch sizes available": "Yes",
                "Special seat dimensions available": "Yes",
                "US Patent No. 6.220.601": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 40,
                    product_id: "mg9-type-mg9",
                    rotary_face: "Carbon graphite, antimony impregnated",
                    stationary_face: "Silicon carbide",
                    seal_code: "AQ1"
                },
                {
                    id: 41,
                    product_id: "mg9-type-mg9",
                    rotary_face: "Carbon graphite, resin impregnated",
                    stationary_face: "Aluminium oxide (Ceramic)",
                    seal_code: "BV"
                },
                {
                    id: 42,
                    product_id: "mg9-type-mg9",
                    rotary_face: "Silicon carbide",
                    stationary_face: "Silicon carbide",
                    seal_code: "Q1Q1"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 37,
                    product_id: "mg9-type-mg9",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 38,
                    product_id: "mg9-type-mg9",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 39,
                    product_id: "mg9-type-mg9",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    d1: "10",
                    d6: "17",
                    d7: "21",
                    d14: "11.0",
                    d16: "24.60",
                    da: "19.6",
                    db: "13.0",
                    l1: "53.0",
                    l1k: "32.5",
                    l1N: "40",
                    l1S: "34.0",
                    l5: "1.5",
                    l6: "4",
                    l17: "7.5",
                    l28: "6.6",
                    l29: "9.0"
                },
                {
                    d1: "12",
                    d6: "19",
                    d7: "23",
                    d14: "13.5",
                    d16: "27.80",
                    da: "21.6",
                    db: "15.0",
                    l1: "53.0",
                    l1k: "32.5",
                    l1N: "40",
                    l1S: "34.0",
                    l5: "1.5",
                    l6: "4",
                    l17: "7.5",
                    l28: "6.6",
                    l29: "9.0"
                },
                {
                    d1: "14",
                    d6: "21",
                    d7: "25",
                    d14: "17.0",
                    d16: "30.95",
                    da: "24.0",
                    db: "18.0",
                    l1: "54.5",
                    l1k: "35.0",
                    l1N: "40",
                    l1S: "35.5",
                    l5: "1.5",
                    l6: "4",
                    l17: "9.0",
                    l28: "6.6",
                    l29: "10.5"
                },
                {
                    d1: "15",
                    d6: "–",
                    d7: "–",
                    d14: "17.0",
                    d16: "30.95",
                    da: "25.0",
                    db: "19.0",
                    l1: "54.5",
                    l1k: "–",
                    l1N: "–",
                    l1S: "35.5",
                    l5: "–",
                    l6: "–",
                    l17: "9.0",
                    l28: "–",
                    l29: "10.5"
                },
                {
                    d1: "16",
                    d6: "23",
                    d7: "27",
                    d14: "17.0",
                    d16: "30.95",
                    da: "26.5",
                    db: "20.0",
                    l1: "54.5",
                    l1k: "35.0",
                    l1N: "40",
                    l1S: "35.5",
                    l5: "1.5",
                    l6: "4",
                    l17: "9.0",
                    l28: "6.6",
                    l29: "10.5"
                },
                {
                    d1: "18",
                    d6: "27",
                    d7: "33",
                    d14: "20.0",
                    d16: "34.15",
                    da: "29.0",
                    db: "22.0",
                    l1: "54.5",
                    l1k: "37.5",
                    l1N: "45",
                    l1S: "35.5",
                    l5: "2.0",
                    l6: "5",
                    l17: "9.0",
                    l28: "7.5",
                    l29: "10.5"
                },
                {
                    d1: "20",
                    d6: "29",
                    d7: "35",
                    d14: "21.5",
                    d16: "35.70",
                    da: "31.5",
                    db: "24.5",
                    l1: "54.5",
                    l1k: "37.5",
                    l1N: "45",
                    l1S: "35.5",
                    l5: "2.0",
                    l6: "5",
                    l17: "9.0",
                    l28: "7.5",
                    l29: "10.5"
                },
                {
                    d1: "22",
                    d6: "31",
                    d7: "37",
                    d14: "23.0",
                    d16: "37.30",
                    da: "33.0",
                    db: "27.0",
                    l1: "54.5",
                    l1k: "37.5",
                    l1N: "45",
                    l1S: "35.5",
                    l5: "2.0",
                    l6: "5",
                    l17: "9.0",
                    l28: "7.5",
                    l29: "10.5"
                },
                {
                    d1: "24",
                    d6: "33",
                    d7: "39",
                    d14: "26.5",
                    d16: "40.50",
                    da: "37.0",
                    db: "29.0",
                    l1: "54.5",
                    l1k: "40.0",
                    l1N: "50",
                    l1S: "35.5",
                    l5: "2.0",
                    l6: "5",
                    l17: "9.0",
                    l28: "7.5",
                    l29: "10.5"
                },
                {
                    d1: "25",
                    d6: "34",
                    d7: "40",
                    d14: "26.5",
                    d16: "40.50",
                    da: "38.0",
                    db: "30.0",
                    l1: "54.5",
                    l1k: "40.0",
                    l1N: "50",
                    l1S: "35.5",
                    l5: "2.0",
                    l6: "5",
                    l17: "9.0",
                    l28: "7.5",
                    l29: "10.5"
                },
                {
                    d1: "28",
                    d6: "37",
                    d7: "43",
                    d14: "29.5",
                    d16: "47.65",
                    da: "41.0",
                    db: "34.0",
                    l1: "72.0",
                    l1k: "42.5",
                    l1N: "50",
                    l1S: "45.0",
                    l5: "2.0",
                    l6: "5",
                    l17: "10.5",
                    l28: "7.5",
                    l29: "12.0"
                },
                {
                    d1: "30",
                    d6: "39",
                    d7: "45",
                    d14: "32.5",
                    d16: "50.80",
                    da: "43.0",
                    db: "36.0",
                    l1: "72.0",
                    l1k: "42.5",
                    l1N: "50",
                    l1S: "45.0",
                    l5: "2.0",
                    l6: "5",
                    l17: "10.5",
                    l28: "7.5",
                    l29: "12.0"
                },
                {
                    d1: "32",
                    d6: "42",
                    d7: "48",
                    d14: "32.5",
                    d16: "50.80",
                    da: "45.0",
                    db: "38.0",
                    l1: "72.0",
                    l1k: "42.5",
                    l1N: "55",
                    l1S: "45.0",
                    l5: "2.0",
                    l6: "5",
                    l17: "10.5",
                    l28: "7.5",
                    l29: "12.0"
                },
                {
                    d1: "33",
                    d6: "42",
                    d7: "48",
                    d14: "36.5",
                    d16: "54.00",
                    da: "46.0",
                    db: "39.0",
                    l1: "72.0",
                    l1k: "42.5",
                    l1N: "55",
                    l1S: "45.0",
                    l5: "2.0",
                    l6: "5",
                    l17: "10.5",
                    l28: "7.5",
                    l29: "12.0"
                },
                {
                    d1: "35",
                    d6: "44",
                    d7: "50",
                    d14: "36.5",
                    d16: "54.00",
                    da: "48.0",
                    db: "41.0",
                    l1: "72.0",
                    l1k: "42.5",
                    l1N: "55",
                    l1S: "45.0",
                    l5: "2.0",
                    l6: "5",
                    l17: "10.5",
                    l28: "7.5",
                    l29: "12.0"
                },
                {
                    d1: "38",
                    d6: "49",
                    d7: "56",
                    d14: "39.5",
                    d16: "57.15",
                    da: "52.5",
                    db: "44.5",
                    l1: "72.0",
                    l1k: "45.0",
                    l1N: "55",
                    l1S: "45.0",
                    l5: "2.0",
                    l6: "6",
                    l17: "10.5",
                    l28: "9.0",
                    l29: "12.0"
                },
                {
                    d1: "40",
                    d6: "51",
                    d7: "58",
                    d14: "42.5",
                    d16: "60.35",
                    da: "55.5",
                    db: "47.5",
                    l1: "72.0",
                    l1k: "45.0",
                    l1N: "55",
                    l1S: "45.0",
                    l5: "2.0",
                    l6: "6",
                    l17: "10.5",
                    l28: "9.0",
                    l29: "12.0"
                },
                {
                    d1: "43",
                    d6: "54",
                    d7: "61",
                    d14: "46.0",
                    d16: "63.50",
                    da: "58.5",
                    db: "50.5",
                    l1: "83.0",
                    l1k: "45.0",
                    l1N: "60",
                    l1S: "53.0",
                    l5: "2.0",
                    l6: "6",
                    l17: "10.5",
                    l28: "9.0",
                    l29: "12.0"
                },
                {
                    d1: "45",
                    d6: "56",
                    d7: "63",
                    d14: "46.0",
                    d16: "63.50",
                    da: "60.5",
                    db: "52.5",
                    l1: "83.0",
                    l1k: "45.0",
                    l1N: "60",
                    l1S: "53.0",
                    l5: "2.0",
                    l6: "6",
                    l17: "10.5",
                    l28: "9.0",
                    l29: "12.0"
                },
                {
                    d1: "48",
                    d6: "59",
                    d7: "66",
                    d14: "49.0",
                    d16: "66.70",
                    da: "64.0",
                    db: "56.0",
                    l1: "83.0",
                    l1k: "45.0",
                    l1N: "60",
                    l1S: "53.0",
                    l5: "2.0",
                    l6: "6",
                    l17: "10.5",
                    l28: "9.0",
                    l29: "12.0"
                },
                {
                    d1: "50",
                    d6: "62",
                    d7: "70",
                    d14: "52.0",
                    d16: "69.85",
                    da: "66.0",
                    db: "58.0",
                    l1: "84.5",
                    l1k: "47.5",
                    l1N: "60",
                    l1S: "54.5",
                    l5: "2.5",
                    l6: "6",
                    l17: "12.0",
                    l28: "9.5",
                    l29: "13.5"
                },
                {
                    d1: "53",
                    d6: "65",
                    d7: "73",
                    d14: "55.5",
                    d16: "73.05",
                    da: "69.0",
                    db: "61.0",
                    l1: "84.5",
                    l1k: "47.5",
                    l1N: "70",
                    l1S: "54.5",
                    l5: "2.5",
                    l6: "6",
                    l17: "12.0",
                    l28: "11.0",
                    l29: "13.5"
                },
                {
                    d1: "55",
                    d6: "67",
                    d7: "75",
                    d14: "58.5",
                    d16: "76.20",
                    da: "71.0",
                    db: "63.0",
                    l1: "84.5",
                    l1k: "47.5",
                    l1N: "70",
                    l1S: "54.5",
                    l5: "2.5",
                    l6: "6",
                    l17: "12.0",
                    l28: "11.0",
                    l29: "13.5"
                },
                {
                    d1: "58",
                    d6: "70",
                    d7: "78",
                    d14: "61.5",
                    d16: "79.40",
                    da: "76.0",
                    db: "66.0",
                    l1: "84.5",
                    l1k: "52.5",
                    l1N: "70",
                    l1S: "54.5",
                    l5: "2.5",
                    l6: "6",
                    l17: "12.0",
                    l28: "11.0",
                    l29: "13.5"
                },
                {
                    d1: "60",
                    d6: "72",
                    d7: "80",
                    d14: "61.5",
                    d16: "79.40",
                    da: "78.0",
                    db: "68.0",
                    l1: "84.5",
                    l1k: "52.5",
                    l1N: "70",
                    l1S: "54.5",
                    l5: "2.5",
                    l6: "6",
                    l17: "12.0",
                    l28: "11.0",
                    l29: "13.5"
                },
                {
                    d1: "63",
                    d6: "75",
                    d7: "83",
                    d14: "65.0",
                    d16: "82.55",
                    da: "82.0",
                    db: "71.5",
                    l1: "84.5",
                    l1k: "52.5",
                    l1N: "70",
                    l1S: "54.5",
                    l5: "2.5",
                    l6: "6",
                    l17: "12.0",
                    l28: "11.0",
                    l29: "13.5"
                },
                {
                    d1: "65",
                    d6: "77",
                    d7: "85",
                    d14: "68.0",
                    d16: "92.10",
                    da: "84.0",
                    db: "73.5",
                    l1: "86.0",
                    l1k: "52.5",
                    l1N: "80",
                    l1S: "65.0",
                    l5: "2.5",
                    l6: "6",
                    l17: "14.5",
                    l28: "11.0",
                    l29: "16.0"
                },
                {
                    d1: "68",
                    d6: "81",
                    d7: "90",
                    d14: "71.0",
                    d16: "95.25",
                    da: "87.0",
                    db: "76.5",
                    l1: "86.0",
                    l1k: "52.5",
                    l1N: "80",
                    l1S: "65.0",
                    l5: "2.5",
                    l6: "7",
                    l17: "14.5",
                    l28: "11.3",
                    l29: "16.0"
                },
                {
                    d1: "70",
                    d6: "83",
                    d7: "92",
                    d14: "71.0",
                    d16: "95.25",
                    da: "89.0",
                    db: "79.0",
                    l1: "86.0",
                    l1k: "60.0",
                    l1N: "80",
                    l1S: "65.0",
                    l5: "2.5",
                    l6: "7",
                    l17: "14.5",
                    l28: "11.3",
                    l29: "16.0"
                },
                {
                    d1: "75",
                    d6: "88",
                    d7: "97",
                    d14: "77.5",
                    d16: "101.60",
                    da: "95.0",
                    db: "85.0",
                    l1: "89.0",
                    l1k: "60.0",
                    l1N: "80",
                    l1S: "68.0",
                    l5: "2.5",
                    l6: "7",
                    l17: "14.5",
                    l28: "11.3",
                    l29: "16.0"
                },
                {
                    d1: "80",
                    d6: "95",
                    d7: "105",
                    d14: "84.0",
                    d16: "114.30",
                    da: "101.5",
                    db: "91.5",
                    l1: "99.0",
                    l1k: "60.0",
                    l1N: "90",
                    l1S: "76.0",
                    l5: "3.0",
                    l6: "7",
                    l17: "18.5",
                    l28: "12.0",
                    l29: "20.0"
                },
                {
                    d1: "85",
                    d6: "100",
                    d7: "110",
                    d14: "87.0",
                    d16: "117.50",
                    da: "107.0",
                    db: "97.0",
                    l1: "99.0",
                    l1k: "60.0",
                    l1N: "90",
                    l1S: "76.0",
                    l5: "3.0",
                    l6: "7",
                    l17: "18.5",
                    l28: "14.0",
                    l29: "20.0"
                },
                {
                    d1: "90",
                    d6: "105",
                    d7: "115",
                    d14: "93.5",
                    d16: "123.85",
                    da: "111.5",
                    db: "103.0",
                    l1: "103.0",
                    l1k: "65.0",
                    l1N: "90",
                    l1S: "79.0",
                    l5: "3.0",
                    l6: "7",
                    l17: "18.5",
                    l28: "14.0",
                    l29: "20.0"
                },
                {
                    d1: "95",
                    d6: "110",
                    d7: "120",
                    d14: "96.5",
                    d16: "127.00",
                    da: "117.5",
                    db: "108.0",
                    l1: "103.0",
                    l1k: "65.0",
                    l1N: "90",
                    l1S: "79.0",
                    l5: "3.0",
                    l6: "7",
                    l17: "18.5",
                    l28: "14.0",
                    l29: "20.0"
                },
                {
                    d1: "100",
                    d6: "115",
                    d7: "125",
                    d14: "103.0",
                    d16: "133.35",
                    da: "122.5",
                    db: "114.0",
                    l1: "106.0",
                    l1k: "65.0",
                    l1N: "90",
                    l1S: "82.0",
                    l5: "3.0",
                    l6: "7",
                    l17: "18.5",
                    l28: "14.0",
                    l29: "20.0"
                },
                {
                    d1: "Table A - Dimensions in Millimeter",
                    d6: "d1",
                    d7: "d1",
                    d14: "d14",
                    d16: "d16",
                    da: "da",
                    db: "db",
                    l1: "l1",
                    l1k: "l1S",
                    l1N: "l17",
                    l1S: "l29",
                    l5: "0.375&quot;",
                    l6: "9.53",
                    l17: "11.0",
                    l28: "24.60",
                    l29: "18.8"
                },
                {
                    d1: "12.5",
                    d6: "53.0",
                    d7: "34.0",
                    d14: "7.5",
                    d16: "9.0",
                    da: "0.500&quot;",
                    db: "12.70",
                    l1: "13.5",
                    l1k: "27.80",
                    l1N: "22.3",
                    l1S: "16.0",
                    l5: "53.0",
                    l6: "34.0",
                    l17: "7.5",
                    l28: "9.0",
                    l29: "0.625&quot;"
                },
                {
                    d1: "15.88",
                    d6: "17.0",
                    d7: "30.95",
                    d14: "26.5",
                    d16: "20.0",
                    da: "54.5",
                    db: "35.5",
                    l1: "9.0",
                    l1k: "10.5",
                    l1N: "0.750&quot;",
                    l1S: "19.05",
                    l5: "20.0",
                    l6: "34.15",
                    l17: "29.5",
                    l28: "23.0",
                    l29: "54.5"
                },
                {
                    d1: "35.5",
                    d6: "9.0",
                    d7: "10.5",
                    d14: "0.875&quot;",
                    d16: "22.23",
                    da: "23.0",
                    db: "37.30",
                    l1: "33.0",
                    l1k: "27.0",
                    l1N: "54.5",
                    l1S: "35.5",
                    l5: "9.0",
                    l6: "10.5",
                    l17: "1.000&quot;",
                    l28: "25.40",
                    l29: "26.5"
                },
                {
                    d1: "40.50",
                    d6: "38.0",
                    d7: "30.5",
                    d14: "54.5",
                    d16: "35.5",
                    da: "9.0",
                    db: "10.5",
                    l1: "1.125&quot;",
                    l1k: "28.58",
                    l1N: "29.5",
                    l1S: "47.65",
                    l5: "41.5",
                    l6: "34.5",
                    l17: "72.0",
                    l28: "45.0",
                    l29: "10.5"
                },
                {
                    d1: "12.0",
                    d6: "1.250&quot;",
                    d7: "31.75",
                    d14: "32.5",
                    d16: "50.80",
                    da: "45.0",
                    db: "38.0",
                    l1: "72.0",
                    l1k: "45.0",
                    l1N: "10.5",
                    l1S: "12.0",
                    l5: "1.375&quot;",
                    l6: "34.93",
                    l17: "36.5",
                    l28: "54.00",
                    l29: "48.0"
                },
                {
                    d1: "41.0",
                    d6: "72.0",
                    d7: "45.0",
                    d14: "10.5",
                    d16: "12.0",
                    da: "1.500&quot;",
                    db: "38.10",
                    l1: "39.5",
                    l1k: "57.15",
                    l1N: "52.5",
                    l1S: "44.5",
                    l5: "72.0",
                    l6: "45.0",
                    l17: "10.5",
                    l28: "12.0",
                    l29: "1.625&quot;"
                },
                {
                    d1: "41.28",
                    d6: "42.5",
                    d7: "60.35",
                    d14: "57.0",
                    d16: "48.5",
                    da: "72.0",
                    db: "45.0",
                    l1: "10.5",
                    l1k: "12.0",
                    l1N: "1.750&quot;",
                    l1S: "44.45",
                    l5: "46.0",
                    l6: "63.50",
                    l17: "60.5",
                    l28: "51.5",
                    l29: "83.0"
                },
                {
                    d1: "53.0",
                    d6: "10.5",
                    d7: "12.0",
                    d14: "1.875&quot;",
                    d16: "47.63",
                    da: "49.0",
                    db: "66.70",
                    l1: "64.0",
                    l1k: "55.0",
                    l1N: "83.0",
                    l1S: "53.0",
                    l5: "10.5",
                    l6: "12.0",
                    l17: "2.000&quot;",
                    l28: "50.80",
                    l29: "52.0"
                },
                {
                    d1: "69.85",
                    d6: "66.0",
                    d7: "58.0",
                    d14: "84.5",
                    d16: "54.5",
                    da: "12.0",
                    db: "13.5",
                    l1: "2.125&quot;",
                    l1k: "53.98",
                    l1N: "55.5",
                    l1S: "73.05",
                    l5: "71.0",
                    l6: "61.5",
                    l17: "84.5",
                    l28: "54.5",
                    l29: "12.0"
                },
                {
                    d1: "13.5",
                    d6: "2.250&quot;",
                    d7: "57.15",
                    d14: "58.5",
                    d16: "76.20",
                    da: "76.5",
                    db: "65.0",
                    l1: "84.5",
                    l1k: "54.5",
                    l1N: "12.0",
                    l1S: "13.5",
                    l5: "2.375&quot;",
                    l6: "60.33",
                    l17: "61.5",
                    l28: "79.40",
                    l29: "78.5"
                },
                {
                    d1: "68.5",
                    d6: "84.5",
                    d7: "54.5",
                    d14: "12.0",
                    d16: "13.5",
                    da: "2.500&quot;",
                    db: "63.50",
                    l1: "65.0",
                    l1k: "82.55",
                    l1N: "82.0",
                    l1S: "72.0",
                    l5: "84.5",
                    l6: "54.5",
                    l17: "12.0",
                    l28: "13.5",
                    l29: "2.625&quot;"
                },
                {
                    d1: "66.68",
                    d6: "68.0",
                    d7: "92.10",
                    d14: "84.0",
                    d16: "75.0",
                    da: "86.0",
                    db: "65.0",
                    l1: "14.5",
                    l1k: "16.0",
                    l1N: "2.750&quot;",
                    l1S: "69.85",
                    l5: "71.0",
                    l6: "95.25",
                    l17: "89.0",
                    l28: "79.0",
                    l29: "86.0"
                },
                {
                    d1: "65.0",
                    d6: "14.5",
                    d7: "16.0",
                    d14: "2.875“",
                    d16: "73.03",
                    da: "74.5",
                    db: "98.45",
                    l1: "92.5",
                    l1k: "82.0",
                    l1N: "89.0",
                    l1S: "68.0",
                    l5: "14.5",
                    l6: "16.0",
                    l17: "3.000“",
                    l28: "76.20",
                    l29: "77.5"
                },
                {
                    d1: "101.60",
                    d6: "95.5",
                    d7: "85.5",
                    d14: "89.0",
                    d16: "68.0",
                    da: "14.5",
                    db: "16.0",
                    l1: "3.125“",
                    l1k: "79.38",
                    l1N: "80.5",
                    l1S: "111.15",
                    l5: "101.5",
                    l6: "91.0",
                    l17: "99.0",
                    l28: "76.0",
                    l29: "18.5"
                },
                {
                    d1: "20.0",
                    d6: "3.250“",
                    d7: "82.55",
                    d14: "84.0",
                    d16: "114.30",
                    da: "104.7",
                    db: "94.0",
                    l1: "99.0",
                    l1k: "76.0",
                    l1N: "18.5",
                    l1S: "20.0",
                    l5: "3.375“",
                    l6: "85.73",
                    l17: "87.0",
                    l28: "117.50",
                    l29: "107.0"
                },
                {
                    d1: "98.0",
                    d6: "99.0",
                    d7: "76.0",
                    d14: "18.5",
                    d16: "20.0",
                    da: "3.500“",
                    db: "88.90",
                    l1: "90.5",
                    l1k: "120.65",
                    l1N: "111.5",
                    l1S: "100.0",
                    l5: "99.0",
                    l6: "76.0",
                    l17: "18.5",
                    l28: "20.0",
                    l29: "3.625“"
                },
                {
                    d1: "92.08",
                    d6: "93.5",
                    d7: "123.85",
                    d14: "114.5",
                    d16: "104.0",
                    da: "103.0",
                    db: "79.0",
                    l1: "18.5",
                    l1k: "20.0",
                    l1N: "3.750“",
                    l1S: "95.25",
                    l5: "96.5",
                    l6: "127.00",
                    l17: "118.0",
                    l28: "108.0",
                    l29: "103.0"
                },
                {
                    d1: "79.0",
                    d6: "18.5",
                    d7: "20.0",
                    d14: "3.875“",
                    d16: "98.43",
                    da: "100.0",
                    db: "130.20",
                    l1: "121.0",
                    l1k: "112.0",
                    l1N: "106.0",
                    l1S: "82.0",
                    l5: "18.5",
                    l6: "20.0",
                    l17: "4.000“",
                    l28: "101.60",
                    l29: "103.0"
                },
                {
                    d1: "133.35",
                    d6: "125.0",
                    d7: "116.0",
                    d14: "106.0",
                    d16: "82.0",
                    da: "18.5",
                    db: "20.0",
                    l1: "Table B - Dimensions in inch / millimeter",
                    l1k: "d1",
                    l1N: "d61",
                    l1S: "d71",
                    l5: "da",
                    l6: "db",
                    l17: "l14",
                    l28: "l15",
                    l29: "l41"
                },
                {
                    l51: "0.500",
                    l61: "0.750",
                    d1: "0.875",
                    d61: "0.740",
                    d71: "0.492",
                    da: "1.125",
                    db: "1.500",
                    l14: "0.313",
                    l15: "0.050",
                    l41: "0.250"
                },
                {
                    l51: "1.250",
                    l61: "1.043",
                    d1: "0.630",
                    d61: "1.125",
                    d71: "1.500",
                    da: "0.313",
                    db: "0.050",
                    l14: "0.250",
                    l15: "0.625",
                    l41: "0.937"
                },
                {
                    l51: "0.905",
                    l61: "1.281",
                    d1: "1.718",
                    d61: "0.406",
                    d71: "0.050",
                    da: "0.344",
                    db: "0.750",
                    l14: "1.062",
                    l15: "1.375",
                    l41: "1.161"
                },
                {
                    l51: "1.781",
                    l61: "0.406",
                    d1: "0.050",
                    d61: "0.344",
                    d71: "0.875",
                    da: "1.187",
                    db: "1.500",
                    l14: "1.299",
                    l15: "1.063",
                    l41: "1.343"
                },
                {
                    l51: "0.050",
                    l61: "0.375",
                    d1: "1.000",
                    d61: "1.312",
                    d71: "1.625",
                    da: "1.496",
                    db: "1.200",
                    l14: "1.437",
                    l15: "2.000",
                    l41: "0.437"
                },
                {
                    l51: "1.250",
                    l61: "1.563",
                    d1: "1.750",
                    d61: "1.634",
                    d71: "1.358",
                    da: "1.500",
                    db: "2.062",
                    l14: "0.437",
                    l15: "0.050",
                    l41: "0.375"
                },
                {
                    l51: "2.000",
                    l61: "1.890",
                    d1: "1.496",
                    d61: "1.500",
                    d71: "2.062",
                    da: "0.437",
                    db: "0.050",
                    l14: "0.375",
                    l15: "1.375",
                    l41: "1.687"
                },
                {
                    l51: "1.752",
                    l61: "1.562",
                    d1: "2.124",
                    d61: "0.437",
                    d71: "0.050",
                    da: "0.375",
                    db: "1.500",
                    l14: "1.813",
                    l15: "2.125",
                    l41: "2.067"
                },
                {
                    l51: "2.500",
                    l61: "0.500",
                    d1: "0.050",
                    d61: "0.375",
                    d71: "1.625",
                    da: "2.000",
                    db: "2.375",
                    l14: "2.244",
                    l15: "1.909",
                    l41: "1.875"
                },
                {
                    l51: "0.050",
                    l61: "0.437",
                    d1: "1.750",
                    d61: "2.125",
                    d71: "2.500",
                    da: "2.382",
                    db: "2.028",
                    l14: "1.875",
                    l15: "2.500",
                    l41: "0.500"
                },
                {
                    l51: "2.000",
                    l61: "2.375",
                    d1: "2.625",
                    d61: "2.520",
                    d71: "2.165",
                    da: "2.000",
                    db: "2.625",
                    l14: "0.500",
                    l15: "0.050",
                    l41: "0.437"
                },
                {
                    l51: "3.000",
                    l61: "2.795",
                    d1: "2.283",
                    d61: "2.000",
                    d71: "2.625",
                    da: "0.500",
                    db: "0.050",
                    l14: "0.437",
                    l15: "2.125",
                    l41: "2.375"
                },
                {
                    l51: "2.559",
                    l61: "2.249",
                    d1: "2.937",
                    d61: "0.562",
                    d71: "0.050",
                    da: "0.500",
                    db: "2.250",
                    l14: "2.437",
                    l15: "3.125",
                    l41: "2.992"
                },
                {
                    l51: "3.062",
                    l61: "0.562",
                    d1: "0.050",
                    d61: "0.500",
                    d71: "2.375",
                    da: "2.563",
                    db: "3.250",
                    l14: "3.071",
                    l15: "2.697",
                    l41: "2.375"
                },
                {
                    l51: "0.050",
                    l61: "0.500",
                    d1: "2.500",
                    d61: "2.687",
                    d71: "3.375",
                    da: "3.228",
                    db: "2.834",
                    l14: "2.375",
                    l15: "3.062",
                    l41: "0.562"
                },
                {
                    l51: "2.750",
                    l61: "2.937",
                    d1: "3.375",
                    d61: "3.307",
                    d71: "2.953",
                    da: "2.562",
                    db: "3.375",
                    l14: "0.625",
                    l15: "0.100",
                    l41: "0.562"
                },
                {
                    l51: "3.750",
                    l61: "3.642",
                    d1: "3.110",
                    d61: "2.562",
                    d71: "3.375",
                    da: "0.625",
                    db: "0.100",
                    l14: "0.562",
                    l15: "2.875",
                    l41: "3.062"
                },
                {
                    l51: "3.366",
                    l61: "2.687",
                    d1: "3.500",
                    d61: "0.625",
                    d71: "0.100",
                    da: "0.562",
                    db: "3.000",
                    l14: "3.187",
                    l15: "3.875",
                    l41: "3.760"
                },
                {
                    l51: "3.906",
                    l61: "0.781",
                    d1: "0.100",
                    d61: "0.562",
                    d71: "3.125",
                    da: "3.312",
                    db: "4.000",
                    l14: "4.000",
                    l15: "3.583",
                    l41: "2.968"
                },
                {
                    l51: "0.100",
                    l61: "0.656",
                    d1: "3.250",
                    d61: "3.437",
                    d71: "4.125",
                    da: "4.122",
                    db: "3.700",
                    l14: "2.968",
                    l15: "3.906",
                    l41: "0.781"
                },
                {
                    l51: "3.500",
                    l61: "3.687",
                    d1: "4.250",
                    d61: "4.213",
                    d71: "3.858",
                    da: "2.968",
                    db: "3.906",
                    l14: "0.781",
                    l15: "0.100",
                    l41: "0.656"
                },
                {
                    l51: "4.500",
                    l61: "4.508",
                    d1: "3.937",
                    d61: "2.968",
                    d71: "3.906",
                    da: "0.781",
                    db: "0.100",
                    l14: "0.656",
                    l15: "3.625",
                    l41: "3.812"
                },
                {
                    l51: "4.252",
                    l61: "3.093",
                    d1: "4.031",
                    d61: "0.781",
                    d71: "0.100",
                    da: "0.656",
                    db: "3.750",
                    l14: "3.937",
                    l15: "4.625",
                    l41: "4.646"
                },
                {
                    l51: "4.156",
                    l61: "0.781",
                    d1: "0.100",
                    d61: "0.656",
                    d71: "3.875",
                    da: "4.062",
                    db: "4.750",
                    l14: "4.764",
                    l15: "4.409",
                    l41: "3.218"
                },
                {
                    l51: "0.100",
                    l61: "0.656",
                    d1: "4.000",
                    d61: "4.187",
                    d71: "4.875",
                    da: "4.921",
                    db: "4.567",
                    l14: "3.218",
                    l15: "4.156",
                    l41: "0.781"
                }
            ]
        }
    },
    {
        id: "mg1-type-m01",
        slug: "mg1-type-m01",
        name: "MG1/TYPE M1/M2/M3/S2",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/14-MG1 (TYPE M1).jpg",
        short_description: "Interchangeable with Burgmann MG1. Elastomer bellows, single spring. Pressure up to 12 bar. Meets DIN24960 and EN12756 standards.",
        description: "The Sealergy Seals Type MG1 is a mechanical seal with an elastomer bellows and a single spring design, and it is interchangeable with the industry-standard Burgmann MG1 seal.\nThis seal is a common and versatile choice for general-purpose applications across many industries.\nThe MG9 seal is designed to meet industrial standards such as DIN24960 and EN12756. It is also available in both metric and inch sizes.\n\nThe MG9 is a highly versatile seal used in industries like water and wastewater technology, pulp and paper, chemical, and food processing. It is suitable for various types of rotary equipment, including centrifugal pumps, piping pumps, and sewage pumps, handling a range of media such as oil, water, sewage, and weak corrosive liquids.\nThe MG9 features an elastomer bellows and an independent spring design that prevents torsion and allows the seal to handle axial movement and compensate for shaft run-out. This design contributes to its reliability and longevity.\nThe MG9 has a compact structure with a small outer diameter, which allows it to fit into tight installation spaces. It is also designed for easy installation and maintenance, which can reduce downtime and lower overall costs.\nThe seal offers a wide selection of materials for its components, such as different seal faces (carbon, ceramic, silicon carbide), elastomers (NBR, EPDM, FKM), and metal parts (stainless steel). This allows it to be customized to meet specific operating conditions, including a wide temperature range and different pressure levels.",
        details: {
            technical_features: {
                Pressure: "Up to 12 bar (170 psi).",
                "Non-Pusher": "Yes",
                "Bi-Directional": "Yes",
                "Elastomer Bellow": "Yes",
                Unbalanced: "Yes"
            },
            seal_face_combinations: [
                {
                    id: 43,
                    product_id: "mg1-type-m01",
                    rotary_face: "Regular Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "CV"
                },
                {
                    id: 44,
                    product_id: "mg1-type-m01",
                    rotary_face: "Resin Carbon",
                    stationary_face: "Silicon Carbide",
                    seal_code: "RV"
                },
                {
                    id: 45,
                    product_id: "mg1-type-m01",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 40,
                    product_id: "mg1-type-m01",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 41,
                    product_id: "mg1-type-m01",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 42,
                    product_id: "mg1-type-m01",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ],
            dimensions: [
                {
                    D1: "12MM",
                    D2: "23.55",
                    L1: "24.3",
                    L2: "6.1"
                },
                {
                    D1: "18.35",
                    D2: "14MM",
                    L1: "25.65",
                    L2: "27.15"
                },
                {
                    D1: "7.7",
                    D2: "20.8",
                    L1: "15MM",
                    L2: "27.6"
                },
                {
                    D1: "28.15",
                    D2: "6.6",
                    L1: "21.7",
                    L2: "16MM"
                },
                {
                    D1: "27.6",
                    D2: "28.15",
                    L1: "6.6",
                    L2: "21.7"
                },
                {
                    D1: "18MM",
                    D2: "33.55",
                    L1: "31",
                    L2: "7.3"
                },
                {
                    D1: "24.9",
                    D2: "19MM",
                    L1: "36",
                    L2: "36.1"
                },
                {
                    D1: "8.2",
                    D2: "25.8",
                    L1: "20MM",
                    L2: "36"
                },
                {
                    D1: "36.1",
                    D2: "8.2",
                    L1: "25.8",
                    L2: "22MM"
                },
                {
                    D1: "37.8",
                    D2: "37.2",
                    L1: "9.3",
                    L2: "24.8"
                },
                {
                    D1: "24MM",
                    D2: "40.55",
                    L1: "41",
                    L2: "7.2"
                },
                {
                    D1: "28.5",
                    D2: "25MM",
                    L1: "40.55",
                    L2: "41"
                },
                {
                    D1: "7.2",
                    D2: "28.5",
                    L1: "28MM",
                    L2: "43.5"
                },
                {
                    D1: "47",
                    D2: "7",
                    L1: "30.85",
                    L2: "30MM"
                },
                {
                    D1: "45.5",
                    D2: "47",
                    L1: "7.4",
                    L2: "31.8"
                },
                {
                    D1: "32MM",
                    D2: "48.55",
                    L1: "50.4",
                    L2: "9"
                },
                {
                    D1: "31.95",
                    D2: "33MM",
                    L1: "48.55",
                    L2: "5.3"
                },
                {
                    D1: "9",
                    D2: "32.5",
                    L1: "35MM",
                    L2: "50.5"
                },
                {
                    D1: "51.3",
                    D2: "8.8",
                    L1: "33.75",
                    L2: "38MM"
                },
                {
                    D1: "56.4",
                    D2: "58.3",
                    L1: "9.3",
                    L2: "33.8"
                },
                {
                    D1: "40MM",
                    D2: "58.55",
                    L1: "61.3",
                    L2: "10.1"
                }
            ]
        }
    },
    {
        id: "mg12-type-m12",
        slug: "mg12-type-m12",
        name: "MG2/TYPE MG2",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/MG12.jpg",
        short_description: "MG12 elastomer bellows mechanical seal. Compatible with industry-standard MG12 series. Single spring design.",
        description: "The Sealergy Seals Type MG2 is an elastomer below mechanical seal. It is a variation of the widely used MG-series of seals and is often designed to be compatible with other industry-standard models, such as the Burgmann MG2.\nThis type of seal is known for its durability and versatility, making it a reliable choice for a broad range of general-purpose applications.\n\nThe MG2 features a durable rubber bellows with a wider cross-section, providing optimal flexibility. The design is also bi-directional, which means it operates effectively regardless of the shaft's direction of rotation.\nThe flexible bellows design allows the seal to compensate for minor shaft misalignment, run-out, and axial float. This ensures consistent sealing performance and helps to extend the lifespan of the seal.\nThis seal is suitable for a variety of rotating equipment, including pumps, mixers, and compressors. It is often used in applications with fluids that have a high solids content and is a common choice in water and sewage treatment, as well as the chemical and food industries.\nLike other seals in the series, the MG2 can be configured with a variety of materials for its components. This includes different seal faces (e.g., carbon, silicon carbide), elastomers (e.g., NBR, EPDM, Viton), and metal parts, allowing it to be tailored for specific operating conditions and media.",
        details: {
            technical_features: {
                Pressure: "Up to 16 bar (232.06 psi )",
                "Non-Pusher": "Yes",
                Unbalanced: "Yes",
                "It has a single-end structure.": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 46,
                    product_id: "mg12-type-m12",
                    rotary_face: "Regular Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "CV"
                },
                {
                    id: 47,
                    product_id: "mg12-type-m12",
                    rotary_face: "Resin Carbon",
                    stationary_face: "Silicon Carbide",
                    seal_code: "RV"
                },
                {
                    id: 48,
                    product_id: "mg12-type-m12",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 49,
                    product_id: "mg12-type-m12",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 43,
                    product_id: "mg12-type-m12",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 44,
                    product_id: "mg12-type-m12",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 45,
                    product_id: "mg12-type-m12",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "mg13-type-m13",
        slug: "mg13-type-m13",
        name: "MG3/TYPE MG3",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/MG13.jpg",
        short_description: "MG13 elastomer bellows seal. Non-pusher, unbalanced, single-end structure. Working pressure up to 8 bar.",
        description: "The Sealergy Seals Type MG3 is a mechanical seal with a non-pusher elastomeric bellows design, and it is a variant of the widely used MG series of seals.\nThis seal is a common choice for a broad range of general-purpose and light chemical applications. It is often designed to be compatible with industry-standard models, such as the Burgmann MG3 or the CMG 3, making it a versatile and reliable choice.\n\nThe MG3 seal's non-pusher elastomer bellows design allows it to compensate for minor shaft run-out and axial movements. This makes it a dependable choice for general industrial applications such as pumps, mixers, agitators, and compressors.\nThe seal has a compact structure with a small working length, enabling it to fit into equipment with limited installation space.\nThe elastomeric bellows also act as a secondary sealing element, providing a robust solution that is less prone to hang-up than other seal types.\nThe MG3 seal is designed to operate under a variety of conditions. Depending on the material configuration, it can handle a range of fluids and is able to withstand temperatures from -40°C to 150°C and pressures up to 1.4 MPa.\nThe MG3 is designed to be compatible with industry standards such as DIN24960, which simplifies procurement and replacement.",
        details: {
            technical_features: {
                Pressure: "The working pressure is up to 0.8 MPa (around 8 bar).",
                "Non-Pusher.": "Yes",
                "Unbalanced.": "Yes",
                "It has a single-end structure.": "Yes",
                "Bi-directional.": "Yes",
                "Elastomer Bellow.": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 50,
                    product_id: "mg13-type-m13",
                    rotary_face: "Regular Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "CV"
                },
                {
                    id: 51,
                    product_id: "mg13-type-m13",
                    rotary_face: "Resin Carbon",
                    stationary_face: "Silicon Carbide",
                    seal_code: "RV"
                },
                {
                    id: 52,
                    product_id: "mg13-type-m13",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 53,
                    product_id: "mg13-type-m13",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 46,
                    product_id: "mg13-type-m13",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 47,
                    product_id: "mg13-type-m13",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 48,
                    product_id: "mg13-type-m13",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "jc1-type-21s",
        slug: "jc1-type-21s",
        name: "JC1/TYPE 21S",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/15-JC1 (TYPE 21S).jpg",
        short_description: "Interchangeable with John Crane Type 1. Elastomer bellows seal. Pressure up to 10 bar. Bi-directional. Unbalanced, single spring.",
        description: "The term &quot;JC1&quot; is not a specific Sealergy Seals product, but rather a designation that is used to refer to seals that are interchangeable with the John Crane Type 1 mechanical seal. The John Crane Type 1 is a well-known industry standard for mechanical seals. It is a general-purpose, elastomer bellows seal that is widely used for its reliability and versatility.\nDepending on the materials used, these seals can operate in a wide range of pressures, temperatures, and speeds. For example, some variants can handle pressures up to 20 bar and temperatures up to 150°C.\n\nThe JC1 is a highly adaptable seal suitable for a wide range of rotary equipment, including pumps, mixers, blenders, and agitators. It is effective with a variety of fluids, from water and steam to mild chemicals and oils.\nThe seal features a single-coil spring that is less prone to clogging than multi-spring designs, making it a reliable choice for applications that may contain some particulate matter. The elastomer bellows design allows it to compensate for minor shaft movements, ensuring consistent performance.\nAs a widely recognized industry standard, the JC1 is easily interchangeable with seals from other manufacturers. This simplifies procurement and replacement, reducing downtime and operational complexity.\nIts simple and robust design makes the JC1 a durable and economical choice. It provides a long service life with minimal maintenance, which can lead to lower total costs over time.",
        details: {
            technical_features: {
                Pressure: "It can handle pressures up to 10 Bar (145 psi).",
                "Set screw lock collars available": "Some versions offer a set screw locking collar.",
                Unbalanced: "Yes",
                "Single Spring.": "Yes",
                "Bi-directional.": "Yes",
                "Elastomer Bellows": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 54,
                    product_id: "jc1-type-21s",
                    rotary_face: "Regular Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "CV"
                },
                {
                    id: 55,
                    product_id: "jc1-type-21s",
                    rotary_face: "Resin Carbon",
                    stationary_face: "Silicon Carbide",
                    seal_code: "RV"
                },
                {
                    id: 56,
                    product_id: "jc1-type-21s",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 57,
                    product_id: "jc1-type-21s",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 49,
                    product_id: "jc1-type-21s",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 50,
                    product_id: "jc1-type-21s",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 51,
                    product_id: "jc1-type-21s",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "jc2-type-21l",
        slug: "jc2-type-21l",
        name: "JC2/TYPE 21L",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/16-JC1 (TYPE 21L).jpg",
        short_description: "Direct replacement for John Crane Type 2. Non-clogging single-coil spring. Bi-directional elastomer bellows seal. Pressure up to 10 bar.",
        description: "The &quot;JC2&quot; designation is not a specific Sealergy Seals product, but it refers to a mechanical seal that is designed to be a direct replacement for the John Crane Type 2 mechanical seal. The John Crane Type 2 is a single, unbalanced, elastomer bellows seal that is a common industry standard. It is known for its robust and flexible design, making it a reliable choice for general-purpose applications.\n\nThe JC2 is a highly adaptable seal suitable for a wide range of rotary equipment, including pumps, mixers, and compressors. The flexible elastomer bellows allow the seal to compensate for minor shaft misalignments and end-play, ensuring consistent performance.\nThe seal features a non-clogging, single-coil spring that provides reliable sealing and is less susceptible to failure from solids or debris in the fluid. The bellows design also protects the shaft from wear and scoring.\nAs a widely recognized industry standard, the JC2 is easily interchangeable with seals from many other manufacturers. This simplifies procurement and replacement, reducing downtime and maintenance costs.\nThe simple and robust design of the JC2 makes it a durable and economical choice. It provides a long service life with minimal maintenance, which can lead to lower total costs over time compared to more complex sealing solutions.",
        details: {
            technical_features: {
                Pressure: "The maximum pressure                                                                                                                                           such as up to 6 bar (87 psi) or 10 bar (150 psi).",
                "Unbalanced.": "Yes",
                "Non-clogging single spring.": "Yes",
                "Bi-directional.": "Yes",
                "Elastomer bellows.": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 58,
                    product_id: "jc2-type-21l",
                    rotary_face: "Regular Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "CV"
                },
                {
                    id: 59,
                    product_id: "jc2-type-21l",
                    rotary_face: "Resin Carbon",
                    stationary_face: "Silicon Carbide",
                    seal_code: "RV"
                },
                {
                    id: 60,
                    product_id: "jc2-type-21l",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 61,
                    product_id: "jc2-type-21l",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 52,
                    product_id: "jc2-type-21l",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 53,
                    product_id: "jc2-type-21l",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 54,
                    product_id: "jc2-type-21l",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "m2n-type-m2n",
        slug: "m2n-type-m2n",
        name: "M2N/TYPE M2N",
        primary_category_id: 1,
        primary_subcategory_id: 4,
        image: "/Individual Product Thumbnail/M.jpg",
        short_description: "Replacement for Burgmann M2N. Single unbalanced seal with conical spring. Pressure up to 10 bar. No set screws - prevents shaft damage.",
        description: "The Sealergy Seals Type M2N is a mechanical seal that is a replacement for the industry-standard Burgmann M2N. This type of seal is a single, unbalanced seal with a conical spring. It is known for being a cost-effective and dependable solution for a wide range of applications, particularly in water systems and other general-duty industrial uses.\nAs a widely recognized industry standard, the M2N is easily interchangeable with seals from many other manufacturers, which simplifies procurement and replacement.\n\nThe M2N is an economical seal that is easy to install and maintain. Its simple design is free of set screws, which helps prevent damage to the shaft. This simplicity contributes to reduced downtime and lower overall costs.\nThe single, conical spring design of the M2N provides reliable sealing and is less prone to clogging than multi-spring designs. This makes it a good choice for applications that may contain some particulate matter.\nDepending on the materials used for its components, the seal can handle a range of operating conditions, including pressures up to 10 bar and temperatures from -20 °C to 140 °C.\nAs a widely recognized industry standard, the M2N is easily interchangeable with seals from many other manufacturers, which simplifies procurement and replacement.\nThe M2N is widely used in industries such as pulp and paper, water and wastewater technology, and building services. It is particularly suited for circulating pumps, heating systems, compressors, mixers, and blenders.",
        details: {
            technical_features: {
                Pressure: "Up to 10 bar (145 PSI).",
                "Unbalanced.": "Yes",
                "Conical spring rotating.": "Yes",
                "Direction of rotation.": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 62,
                    product_id: "m2n-type-m2n",
                    rotary_face: "Carbon Graphite Resin Impregnated",
                    stationary_face: "Silicon Carbide",
                    seal_code: "BQ"
                },
                {
                    id: 63,
                    product_id: "m2n-type-m2n",
                    rotary_face: "Carbon Graphite Resin Impregnated",
                    stationary_face: "Aluminium Oxide",
                    seal_code: "BV"
                },
                {
                    id: 64,
                    product_id: "m2n-type-m2n",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 65,
                    product_id: "m2n-type-m2n",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                },
                {
                    id: 66,
                    product_id: "m2n-type-m2n",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "QU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 55,
                    product_id: "m2n-type-m2n",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 56,
                    product_id: "m2n-type-m2n",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 57,
                    product_id: "m2n-type-m2n",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "m3n-type-m3n",
        slug: "m3n-type-m3n",
        name: "M3N/TYPE M3N",
        primary_category_id: 1,
        primary_subcategory_id: 4,
        image: "/Individual Product Thumbnail/18-M3N (TYPE M3).jpg",
        short_description: "Replacement for Burgmann M3N. Rotating conical spring. Pressure up to 10 bar. Widely used in chemical and wastewater industries.",
        description: "The Sealergy Seals Type M3N is a mechanical seal that is a direct replacement for the industry-standard Burgmann M3N. It is a single, unbalanced seal with a rotating conical spring, known for its versatility, reliability, and cost-effectiveness in a wide range of industrial applications.\nAs a widely recognized industry standard, the M3N is easily interchangeable with seals from many other manufacturers, which simplifies procurement and replacement.\n\nThe M3N is an economical seal that is easy to install and maintain. Its simple design is free of set screws, which helps to prevent damage to the shaft. This simplicity contributes to reduced downtime and lower overall costs.\nThe single, rotating conical spring design of the M3N provides reliable sealing and is less prone to clogging than multi-spring designs. This makes it a suitable choice for applications with a low solids content in the fluid.\nThe M3N is widely used in industries such as pulp and paper, chemical processing, water and wastewater technology, and building services. It is particularly suited for circulating pumps, heating systems, compressors, mixers, and blenders.\nDepending on the materials used for its components, the seal can handle a wide range of operating conditions, including temperatures from -20 °C to 180 °C, pressures up to 10 bar, and speeds up to 15 m/s.",
        details: {
            technical_features: {
                Pressure: "Up to 10 bar (145 PSI). Some sources indicate up to 25 bars.",
                "Unbalanced.": "Yes",
                "Rotating conical spring.": "Yes",
                "Dependent on direction of rotation": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 67,
                    product_id: "m3n-type-m3n",
                    rotary_face: "Carbon Graphite Resin Impregnated",
                    stationary_face: "Silicon Carbide",
                    seal_code: "BQ"
                },
                {
                    id: 68,
                    product_id: "m3n-type-m3n",
                    rotary_face: "Carbon Graphite Resin Impregnated",
                    stationary_face: "Aluminium Oxide",
                    seal_code: "BV"
                },
                {
                    id: 69,
                    product_id: "m3n-type-m3n",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 70,
                    product_id: "m3n-type-m3n",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                },
                {
                    id: 71,
                    product_id: "m3n-type-m3n",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "QU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 58,
                    product_id: "m3n-type-m3n",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 59,
                    product_id: "m3n-type-m3n",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 60,
                    product_id: "m3n-type-m3n",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "h17n-type-h17",
        slug: "h17n-type-h17",
        name: "H17N/TYPE H17",
        primary_category_id: 1,
        primary_subcategory_id: 4,
        image: "/Individual Product Thumbnail/DRR.jpg",
        short_description: "Replacement for Burgmann H17N. Balanced seal with multiple springs. Pressure up to 80 bar for 14-100mm diameters. For high-pressure applications.",
        description: "The Sealergy Seals Type H17N is a mechanical seal that is a direct replacement for the industry-standard Burgmann H17N. It is a single, balanced seal with a super-sinus or multiple springs, designed for robust performance in high-pressure and high-temperature applications. It is a variant of the H7N seal and is often used in demanding industrial environments.\n\nThe H17N is a balanced seal, which allows it to handle higher pressures and speeds with less heat generation and wear on the seal faces. This design makes it suitable for heavy-duty applications where unbalanced seals would fail prematurely.\nThe super-sinus or multiple spring design provides uniform face loading and is independent of the direction of rotation. This ensures reliable performance in a variety of rotating equipment and minimizes the risk of spring clogging.\nThe H17N is built for durability and can be configured with a variety of high-performance materials for its seal faces, secondary seals, and metal components. This allows it to withstand aggressive media and extreme conditions.\nThis type of seal is recommended for the process industry, oil and gas, refining, petrochemical, chemical, and power plant technology. It is a common choice for applications involving hot water and light hydrocarbons, such as in boiler feed pumps.\nEHJ/TYPE\nTechnical Features\nPressure: Vacuum up to 40 bar (580 PSI).\nBalanced: It features a balanced face design, which allows it to handle higher pressures.\nIndependent of direction of rotation: The seal can be used with shafts that rotate in either direction.\nEncapsulated rotating spring:\nStandard Seal Face Combinations\nRotary Face\nStationary Face\nComplete Seal Code\nRegular Carbon\nCeramic\nCV\nResin Carbon\nSilicon Carbide\nRV\nSilicon Carbide\nSilicon Carbide\nQQ\nTungsten Carbide\nTungsten Carbide\nUU\nElastomer Temperature Capabilities\nMinimum\nMaximum\nHigh Nitrile / Bhuna-N\n-30\n120\nEPEM\n-40\n140\nViton/FKM\n-30\n180\nDimensional Data\nSealergy Seals Type EH7\nThe term &quot;Sealergy Seals Type EH7&quot; is not a specific Sealergy product, but it is a designation for a type of mechanical seal that is a direct replacement for the industry-standard Burgmann EH7 or EH700\nThis type of seal is a single, balanced seal with a stationary spring unit, making it suitable for high-speed and high-pressure applications.\nWhy Choose the Sealergy Seals Type EH7 ?\nThe EH7 is a balanced seal, which allows it to handle higher pressures and speeds with less heat generation and wear on the seal faces. This ensures good sealing performance under high-load conditions and contributes to a longer service life.\nThe unique stationary, spring-loaded unit of the EH7 allows the seal to operate effectively under high-speed and high-pressure conditions.\nThe seal is designed to handle pressures up to 15 bar and temperatures from -20 °C to +100 °C, with a sliding velocity of up to 10 m/s.\nAs a standard design, the EH7 is easily interchangeable with seals from many other manufacturers, which simplifies procurement and replacement, reducing downtime and maintenance costs.",
        details: {
            technical_features: {
                Pressure: "Up to 80 bar (1,160 PSI) for smaller diameters (14-100 mm), and up to 25 bar for larger diameters (100-200 mm).",
                "Balanced.": "Yes",
                "Independent of direction of rotation.": "Yes",
                "Multiple springs stationary.": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 72,
                    product_id: "h17n-type-h17",
                    rotary_face: "Carbon Graphite",
                    stationary_face: "Silicon Carbide",
                    seal_code: "BQ"
                },
                {
                    id: 73,
                    product_id: "h17n-type-h17",
                    rotary_face: "Carbon Graphite",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "BU"
                },
                {
                    id: 74,
                    product_id: "h17n-type-h17",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 75,
                    product_id: "h17n-type-h17",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "QU"
                },
                {
                    id: 76,
                    product_id: "h17n-type-h17",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 61,
                    product_id: "h17n-type-h17",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 62,
                    product_id: "h17n-type-h17",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 63,
                    product_id: "h17n-type-h17",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "multispring-type-muo",
        slug: "multispring-type-muo",
        name: "MULTISPRING/TYPE MUO",
        primary_category_id: 1,
        primary_subcategory_id: 5,
        image: "/Individual Product Thumbnail/21-MULTISPRING (TYPE MUO).jpg",
        short_description: "Multi-spring O-ring seal. Multiple small springs for uniform face loading. Unbalanced up to 10 bar, balanced up to 35 bar. Independent of rotation direction.",
        description: "A &quot;Multi-spring O-ring&quot; seal is a type of mechanical seal that uses multiple small springs arranged around the shaft to provide uniform pressure on the seal faces. This design is often used in industrial applications where a reliable, balanced sealing solution is required.\nThese seals are commonly used in industries such as chemical processing, oil and gas, pharmaceuticals, and food and beverage. They are effective in applications with clear, lubricating, non-corrosive liquids, and can also be used in double configurations for toxic or hazardous liquids.\n\nThe multi-spring design uses multiple small springs arranged around the shaft, which applies uniform pressure to the seal faces. This even pressure distribution reduces localized wear, heat generation, and face distortion, leading to a significantly longer seal life.\nThis type of seal can be designed in both balanced and unbalanced configurations, with the balanced version being suitable for high-pressure applications. The design is also independent of the shaft's direction of rotation.\nThe use of multiple smaller springs allows for a shorter axial length compared to single-spring designs. This makes the seal suitable for equipment with limited installation space.\nThis type of seal can be customized with various materials for the seal faces (e.g., carbon, silicon carbide, tungsten carbide) and O-rings (e.g., NBR, EPDM, Viton) to suit different fluids and operating conditions. This adaptability allows the seal to be optimized for specific environments.",
        details: {
            technical_features: {
                Pressure: "Unbalanced seals can handle up to 10 bar, while balanced seals can go up to 35 bar.",
                "Unbalanced or Balanced.": "Yes",
                "Multiple Springs.": "Yes",
                "Independent of direction of rotation.": "Yes",
                "Pusher type.": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 77,
                    product_id: "multispring-type-muo",
                    rotary_face: "Carbon (Resin-impregnated)",
                    stationary_face: "Ceramic",
                    seal_code: "VC-CE"
                },
                {
                    id: 78,
                    product_id: "multispring-type-muo",
                    rotary_face: "Carbon (Resin-impregnated)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "VC-SS"
                },
                {
                    id: 79,
                    product_id: "multispring-type-muo",
                    rotary_face: "Carbon (Resin-impregnated)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "VC-TC"
                },
                {
                    id: 80,
                    product_id: "multispring-type-muo",
                    rotary_face: "Silicon Carbide (SiC)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "SS-SS"
                },
                {
                    id: 81,
                    product_id: "multispring-type-muo",
                    rotary_face: "Tungsten Carbide (TC)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "TC-TC"
                },
                {
                    id: 82,
                    product_id: "multispring-type-muo",
                    rotary_face: "Silicon Carbide (SiC)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "SS-TC"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 64,
                    product_id: "multispring-type-muo",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 65,
                    product_id: "multispring-type-muo",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 66,
                    product_id: "multispring-type-muo",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "multispring-double-type-mud",
        slug: "multispring-double-type-mud",
        name: "MULTISPRING WEDGE/TYPE MUW",
        primary_category_id: 1,
        primary_subcategory_id: 5,
        image: "/Individual Product Thumbnail/22-MULTISPRING WEDGE  (TYPE MUW).jpg",
        short_description: "Double multi-spring PTFE wedge seal. Balanced design. Pressure up to 35 bar. Superior chemical resistance from PTFE wedge secondary seal.",
        description: "A &quot;Multi-spring Wedge&quot; seal is a type of mechanical seal that uses a multi-spring arrangement for uniform face loading, with a PTFE or similar polymer wedge as the secondary seal. This design is often chosen for its chemical resistance and reliability in high-temperature applications.\nThis type of seal is often available in a balanced configuration, which allows it to handle higher pressures and speeds with less heat and wear on the seal faces. The design is also independent of the shaft's direction of rotation.\n\nThe PTFE (Teflon) or polymer wedge acts as the secondary seal, providing exceptional resistance to a wide range of corrosive and aggressive chemicals. This makes it an ideal choice for the chemical and petrochemical industries.\nThe use of a polymer wedge and a multi-spring design allows the seal to operate effectively at higher temperatures than seals that use elastomer O-rings.\nThe multi-spring arrangement provides even pressure across the seal faces, which reduces localized wear and heat generation. This contributes to a longer service life and greater reliability.\nThe wedge design helps prevent hang-up from solids or sticky media in the fluid, ensuring the seal remains operational and effective in challenging conditions.\nMULTISPRING BALANCE ORING/TYPE\nTechnical Features\nPressure: Up to 35 bar (500 PSI).\nBalanced.\nPusher type.\nMultiple springs.\nIndependent of direction of rotation.\nStandard Seal Face Combinations\nRotary Face\nStationary Face\nComplete Seal Code\nCarbon  graphite(Resin-impregnated)\nSilicon Carbide (SiC)\nB/Q1, C/SiC\nCarbon   graphite (Resin-impregnated)\nTungsten Carbide (TC)\nB/U2, C/TC\nSilicon Carbide (SiC)\nSilicon Carbide (SiC)\nQ1/Q1, SiC/SiC\nTungsten Carbide (TC)\nTungsten Carbide (TC)\nU2/U2, TC/TC\nElastomer Temperature Capabilities\nMinimum\nMaximum\nHigh Nitrile / Bhuna-N\n-30\n120\nEPEM\n-40\n140\nViton/FKM\n-30\n180\nDimensional Data\nSealergy Seals Type MULTISPRING BALANCE ORING\nA &quot;multi-spring balance O-ring&quot; seal is a high-performance mechanical seal that combines a multi-spring arrangement with a balanced design and an O-ring as the secondary sealing element. This type of seal is used for demanding industrial applications that require excellent reliability under high pressure and speed.\nA balanced seal is engineered to handle higher pressures and speeds with less heat generation and wear on the seal faces. This design is crucial for heavy-duty applications where unbalanced seals would fail prematurely.\nWhy Choose the Sealergy Seals Type MULTISPRING BALANCE ORING?\nThe balanced design allows the seal to handle higher pressures and speeds with less heat generation and wear on the seal faces. This is crucial for heavy-duty applications where unbalanced seals would fail prematurely, ensuring a longer service life and greater reliability.\nThe use of multiple small springs provides uniform pressure across the entire seal face. This even pressure distribution reduces localized wear and heat buildup, which extends the seal's life and minimizes the risk of early failure.\nThe O-ring acts as a reliable and cost-effective secondary sealing element. It provides a tight seal while allowing for the necessary axial movement of the seal head, ensuring consistent sealing performance.\nThese seals are commonly used in industries such as chemical processing, oil and gas, pharmaceuticals, and power generation. They are highly effective in sealing a wide variety of clean, lubricating fluids and can be customized with various materials for the seal faces and O-rings to suit specific operating conditions.\nMULTISPRING BALANCE WEDGE/TYPE\nTechnical Features\nPressure: Up to 35 bar (500 PSI).\nBalanced.\nMultiple Springs.\nIndependent of direction of rotation.\nPusher type.\nPTFE Wedge.\nStandard Seal Face Combination\nRotary Face\nStationary Face\nComplete Seal Code\nCarbon (Resin-impregnated)\nSilicon Carbide (SiC)\nVC-SS\nCarbon (Resin-impregnated)\nTungsten Carbide (TC)\nVC-TC\nSilicon Carbide (SiC)\nSilicon Carbide (SiC)\nSS-SS\nTungsten Carbide (TC)\nTungsten Carbide (TC)\nTC-TC\nSilicon Carbide (SiC)\nTungsten Carbide (TC)\nSS-TC\nElastomer Temperature Capabilities\nMinimum\nMaximum\nHigh Nitrile / Bhuna-N\n-30\n120\nEPEM\n-40\n140\nViton/FKM\n-30\n180\nDimensional Data\nSealergy Seals Type MULTISPRING BALANCE WEDGE\nA &quot;multi-spring balance wedge&quot; seal is a high-performance mechanical seal that combines a multi-spring arrangement with a balanced design and a PTFE or similar polymer wedge as the secondary seal. This type of seal is designed for demanding industrial applications that require excellent chemical and temperature resistance under high pressure and speed.\nWhy Choose the Sealergy Seals Type MULTISPRING BALANCE WEDGE ?\nThe PTFE (Teflon) or polymer wedge acts as the secondary seal, providing exceptional resistance to a wide range of corrosive and aggressive chemicals. This material can also operate effectively at higher temperatures than seals that use elastomer O-rings, making it ideal for the chemical and petrochemical industries.\nThe balanced design allows the seal to handle higher pressures and speeds with less heat generation and wear on the seal faces. This is crucial for heavy-duty applications where unbalanced seals would fail prematurely, ensuring a longer service life and greater reliability.\nThe use of multiple small springs provides uniform pressure across the entire seal face. This even pressure distribution reduces localized wear and heat buildup, which extends the seal's life and minimizes the risk of early failure.\nThe wedge design helps prevent hang-up from solids or sticky media in the fluid, ensuring the seal remains operational and effective in challenging conditions.",
        details: {
            technical_features: {
                Pressure: "Unbalanced seals typically handle up to 10 bar, while balanced seals can operate at pressures up to 35 bar.",
                "Balanced/Unbalanced.": "Yes",
                "Multiple Springs.": "Yes",
                "PTFE Wedge.": "Yes",
                "Pusher type.": "Yes",
                "Independent of direction of rotation.": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 83,
                    product_id: "multispring-double-type-mud",
                    rotary_face: "Carbon (Resin-impregnated)",
                    stationary_face: "Ceramic",
                    seal_code: "VC-CE"
                },
                {
                    id: 84,
                    product_id: "multispring-double-type-mud",
                    rotary_face: "Carbon (Resin-impregnated)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "VC-SS"
                },
                {
                    id: 85,
                    product_id: "multispring-double-type-mud",
                    rotary_face: "Carbon (Resin-impregnated)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "VC-TC"
                },
                {
                    id: 86,
                    product_id: "multispring-double-type-mud",
                    rotary_face: "Silicon Carbide (SiC)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "SS-SS"
                },
                {
                    id: 87,
                    product_id: "multispring-double-type-mud",
                    rotary_face: "Tungsten Carbide (TC)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "TC-TC"
                },
                {
                    id: 88,
                    product_id: "multispring-double-type-mud",
                    rotary_face: "Silicon Carbide (SiC)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "SS-TC"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 67,
                    product_id: "multispring-double-type-mud",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 68,
                    product_id: "multispring-double-type-mud",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 69,
                    product_id: "multispring-double-type-mud",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "grundfose-ch12-type-ch12",
        slug: "grundfose-ch12-type-ch12",
        name: "GRUNDOSE Cartridge type TYPE GLF/JMK",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/CH12.jpg",
        short_description: "Cartridge type mechanical seal for Grundfos CR, CRN, CRI series pumps. Single-acting with single spring and O-ring. Pressure up to 25 bar.",
        description: "Based on the information available, a &quot;Sealergy Seals Type GRANDFOSE CLUTH&quot; is not a recognized product. It appears to be a combination of a brand name, &quot;Sealergy Seals,&quot; and a common industry term, &quot;clutch,&quot; with a misspelling of the pump manufacturer &quot;Grundfos.&quot;\n\nAftermarket seals can often be a more economical alternative to original equipment manufacturer (OEM) parts.\nA replacement seal may be available with a wider range of materials for the seal faces, O-rings, and other components, allowing for customization to better suit specific fluids, temperatures, or pressures.\nReplacement seals are often widely available from a variety of suppliers, making them easy to procure.",
        details: {
            technical_features: {
                Pressure: "Up to 2.5 MPa (~25 bar)",
                "Single-acting mechanical seal": "Yes",
                "Cartridge type with a single spring and O-ring. Some seals are a balanced type.": "Yes",
                Application: "Designed to fit Grundfos CR, CRN, and CRI series pumps.",
                "Standard Seal Face Combination": "Yes",
                "Rotary Face": "Yes",
                "Stationary Face": "Yes",
                "Complete Seal Code": "Yes",
                "Silicon Carbide (SiC)": "Yes",
                QQ: "Yes",
                "Tungsten Carbide (TC)": "Yes",
                QU: "Yes",
                "Carbon (Resin-impregnated)": "Yes",
                BQ: "Yes",
                BU: "Yes"
            },
            seal_face_combinations: [
                {
                    id: 79,
                    product_id: "grundfose-ch12-type-ch12",
                    rotary_face: "Silicon Carbide (SiC)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "QQ"
                },
                {
                    id: 80,
                    product_id: "grundfose-ch12-type-ch12",
                    rotary_face: "Carbon (Resin-impregnated)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "BQ"
                },
                {
                    id: 81,
                    product_id: "grundfose-ch12-type-ch12",
                    rotary_face: "Carbon (Resin-impregnated)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "BU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 70,
                    product_id: "grundfose-ch12-type-ch12",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 71,
                    product_id: "grundfose-ch12-type-ch12",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 72,
                    product_id: "grundfose-ch12-type-ch12",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "grundfose-clutch-type-gr5",
        slug: "grundfose-clutch-type-gr5",
        name: "GRUNDFOSE BELOW / TYPE GR3",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/24-GRUNDOSE CLUTH (TYPE GR5).jpg",
        short_description: "Replacement seal for Grundfos and CNP pump series. Single end, unbalanced cartridge. Pusher type with O-ring structure. Up to 25 bar.",
        description: "The &quot;Sealergy Seals Type GRANDFOSE CNP&quot; is not a specific product name, but rather a combination of brands and pump types that describes a mechanical seal designed to be interchangeable with seals used in pumps from Grundfos and CNP. Both Grundfos and CNP are major manufacturers of pumps, and a seal like this would be a common replacement part for their pump models.\n\nSeals designed for Grundfos and CNP pumps are used in a variety of industries, including water and wastewater, chemical engineering, and food processing. Since Grundfos and CNP are major pump manufacturers, replacement seals are widely available from multiple suppliers, simplifying the procurement process and reducing downtime\nAftermarket seals are often a more economical choice compared to original equipment manufacturer (OEM) parts. This can lead to significant cost savings on maintenance and repairs, especially for companies with a large fleet of pumps.\nReplacement seals can be configured with a wider range of materials for the seal faces, O-rings, and other components. This allows the seal to be tailored to specific operating conditions, such as higher temperatures, different fluids, or higher pressures, which may not be an option with the standard OEM seal.",
        details: {
            technical_features: {
                Pressure: "Up to 2.5 MPa (~25 bar). Some models are rated for up to 10 bar.",
                "Single end.": "Yes",
                "Unbalanced.": "Yes",
                "Single cartridge.": "Yes",
                "Pusher type with an O-ring structure": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 89,
                    product_id: "grundfose-clutch-type-gr5",
                    rotary_face: "Silicon Carbide (SiC)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "QQ"
                },
                {
                    id: 90,
                    product_id: "grundfose-clutch-type-gr5",
                    rotary_face: "Silicon Carbide (SiC)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "QU"
                },
                {
                    id: 91,
                    product_id: "grundfose-clutch-type-gr5",
                    rotary_face: "Carbon (Resin-impregnated)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "BQ"
                },
                {
                    id: 92,
                    product_id: "grundfose-clutch-type-gr5",
                    rotary_face: "Carbon (Resin-impregnated)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "BU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 73,
                    product_id: "grundfose-clutch-type-gr5",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 74,
                    product_id: "grundfose-clutch-type-gr5",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 75,
                    product_id: "grundfose-clutch-type-gr5",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "g04-type-gr4",
        slug: "g04-type-gr4",
        name: "GRUNDOSE G04 /TYPE GR4",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/G05.jpg",
        short_description: "Versatile industrial pump seal. Single-end pusher type with O-ring. Handles water, oil, sewage and mildly corrosive liquids. Pressure up to 25 bar.",
        description: "The term &quot;Sealergy Seals Type G04&quot; is not a specific product but a designation that refers to a type of mechanical seal that is often a replacement for the stationary seat in other seal systems, or a type of seal for a specific pump series. The G04 type of seal is known for its versatility and is often used in industrial pumps.\n\nThe G04 seal is suitable for a wide range of industrial applications and is effective with a variety of fluids, including water, oil, sewage, and other mildly corrosive liquids. This makes it a dependable, all-purpose solution for many different types of rotating equipment.\nSeals like the G04 are often available as aftermarket parts, which can be a more economical solution for repairs and maintenance.\nSome seals designated as G04 are described as having a single-end, unbalanced structure.\nDepending on the materials used, the G04 seal can handle a range of operating conditions, including temperatures up to +180°C and pressures up to 2.5 MPa. This ensures reliable and long-lasting service in the demanding environments where industrial pumps are typically used.",
        details: {
            technical_features: {
                Pressure: "Up to 2.5 MPa (~25 bar). Some sources indicate up to 1.2 MPa (~12 bar) or up to 10 bar.",
                "A single-end.": "Yes",
                "Pusher-type seal with an O-ring structure.": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 93,
                    product_id: "g04-type-gr4",
                    rotary_face: "Tungsten Carbide (TC)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "UU"
                },
                {
                    id: 94,
                    product_id: "g04-type-gr4",
                    rotary_face: "Silicon Carbide (SiC)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "QQ"
                },
                {
                    id: 95,
                    product_id: "g04-type-gr4",
                    rotary_face: "Silicon Carbide (SiC)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "QU"
                },
                {
                    id: 96,
                    product_id: "g04-type-gr4",
                    rotary_face: "Carbon Graphite",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "CQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 76,
                    product_id: "g04-type-gr4",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 77,
                    product_id: "g04-type-gr4",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 78,
                    product_id: "g04-type-gr4",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "type-502",
        slug: "type-502",
        name: "JOHN CRANE 502/TYPE 502",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/27-502(TYPE 502).jpg",
        short_description: "Replacement for John Crane Type 502. Balanced metal bellows seal. Pressure up to 40 bar. Handles high-temperature hydrocarbons and corrosive liquids.",
        description: "The term &quot;Sealergy Seals Type 502&quot; is not a specific Sealergy product, but it is a designation that refers to a type of mechanical seal that is often a direct replacement for the John Crane Type 502. The John Crane Type 502 is a single, balanced, metal bellows seal that is a popular choice for high-temperature applications.\nThe 502-type seal is used in various rotary equipment, including pumps, agitators, and compressors, for applications involving hot hydrocarbons, heat transfer fluids, and other high-temperature corrosive liquids.\n\nThe metal bellows design eliminates the need for elastomer O-rings as a secondary seal. This allows the seal to operate effectively in a much wider temperature range, from cryogenic to very high temperatures (up to +400 °C, depending on materials), where elastomers would fail.\nThe all-metal construction provides excellent resistance to a wide range of corrosive and aggressive chemicals. This makes the seal an ideal choice for the chemical, petrochemical, and refining industries where robust materials are required.\nThe balanced design of the seal allows it to handle higher pressures and speeds with less heat generation and wear on the seal faces. This is crucial for heavy-duty applications, ensuring a longer service life and greater reliability.\nBecause there are no elastomer O-rings sliding on the shaft, there is no risk of the seal &quot;hanging up&quot; due to frictional wear or chemical attack on the secondary seal. This ensures the seal remains effective throughout its operational life.",
        details: {
            technical_features: {
                Pressure: "Up to 40 bar (580 PSI), though some models are rated for lower pressures, such as 10 or 25 bar.",
                "Non-Pusher.": "Yes",
                "Bi-directional.": "Yes",
                "Elastomer Bellows.": "Yes",
                "This seal is considered an equivalent to John Crane Type 502": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 97,
                    product_id: "type-502",
                    rotary_face: "Carbon (Resin-impregnated)",
                    stationary_face: "Ceramic",
                    seal_code: "BV"
                },
                {
                    id: 98,
                    product_id: "type-502",
                    rotary_face: "Carbon (Resin-impregnated)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "BQ"
                },
                {
                    id: 99,
                    product_id: "type-502",
                    rotary_face: "Silicon Carbide (SiC)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "QQ"
                },
                {
                    id: 100,
                    product_id: "type-502",
                    rotary_face: "Carbon (Resin-impregnated)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "BU"
                },
                {
                    id: 101,
                    product_id: "type-502",
                    rotary_face: "Tungsten Carbide (TC)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 79,
                    product_id: "type-502",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 80,
                    product_id: "type-502",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 81,
                    product_id: "type-502",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "teflon-below-type-tbt",
        slug: "teflon-below-type-tbt",
        name: "TEFLON BELOW/TYPE TBT",
        primary_category_id: 1,
        primary_subcategory_id: 7,
        image: "/Individual Product Thumbnail/28-TEFLON BELOW (TYPE TBT).jpg",
        short_description: "PTFE bellows seal. Non-pusher, non-metallic. Equivalent to John Crane Type 10T/10R. Exceptional chemical resistance. Pressure up to 6 bar.",
        description: "A &quot;Teflon bellows&quot; seal, also known as a PTFE bellows seal, is a type of mechanical seal that uses flexible PTFE bellows as the secondary sealing element. This design is highly valued for its superior chemical resistance and is often chosen for applications involving highly corrosive or aggressive fluids.\n\nThe primary reason for choosing a PTFE bellows seal is its outstanding resistance to almost all chemicals. PTFE is a highly inert material that can withstand a wide range of corrosive fluids, including strong acids and alkalis, making it an ideal choice for the chemical and pharmaceutical industries.\nPTFE bellows seals can operate effectively in a wide temperature range, from cryogenic to high temperatures, where traditional elastomer bellows or O-rings would fail or degrade.\nThe flexible PTFE bellows design prevents the seal from &quot;hanging up&quot; due to solids or crystallization from the process fluid. This is a common issue with other seal types and can lead to seal failure, but the PTFE design ensures reliable performance.",
        details: {
            technical_features: {
                Pressure: "typically ranging from vacuum up to 6 bar (87 psi). Some balanced versions can handle up to 35 bars..",
                "Non-Pusher Type.": "Yes",
                "Non-Metallic Design": "Yes",
                "Equivalent to": "This seal is considered an equivalent to John Crane Type 10T/10R and Flowserve Chemiepac 970"
            },
            seal_face_combinations: [
                {
                    id: 102,
                    product_id: "teflon-below-type-tbt",
                    rotary_face: "Glass-Filled PTFE (GFT)",
                    stationary_face: "Ceramic",
                    seal_code: "GFTV"
                },
                {
                    id: 103,
                    product_id: "teflon-below-type-tbt",
                    rotary_face: "Glass-Filled PTFE (GFT)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "GFTQ"
                },
                {
                    id: 104,
                    product_id: "teflon-below-type-tbt",
                    rotary_face: "Silicon Carbide (SiC)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "QQ"
                },
                {
                    id: 105,
                    product_id: "teflon-below-type-tbt",
                    rotary_face: "Carbon",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "BU"
                },
                {
                    id: 106,
                    product_id: "teflon-below-type-tbt",
                    rotary_face: "Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "BV"
                },
                {
                    id: 107,
                    product_id: "teflon-below-type-tbt",
                    rotary_face: "Tungsten Carbide (TC)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 82,
                    product_id: "teflon-below-type-tbt",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 83,
                    product_id: "teflon-below-type-tbt",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 84,
                    product_id: "teflon-below-type-tbt",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "teflon-mg1-type-tbm",
        slug: "teflon-mg1-type-tbm",
        name: "TEFLON MG1/TYPE TBM",
        primary_category_id: 1,
        primary_subcategory_id: 7,
        image: "/Individual Product Thumbnail/29-TEFLON MG1 (TYPE TBM).jpg",
        short_description: "MG1 seal with PTFE bellows for superior chemical resistance. Non-pusher design. Equivalent to John Crane Type 10T/10R. Pressure up to 6 bar.",
        description: "The &quot;Sealergy Seals Type TEFLON MG1&quot; refers to a mechanical seal that combines features of the industry-standard Burgmann MG1 seal with a Teflon (PTFE) below. The standard MG1 seal uses an elastomer bellows, while this variant uses a Teflon bellows to provide superior chemical resistance.\nThis type of seal is ideal for applications in the chemical, petrochemical, and pharmaceutical industries where highly corrosive fluids are present.\n\nThe primary reason for choosing this seal is the use of a Teflon (PTFE) bellows as the secondary sealing element. This material is highly inert and can withstand a wide range of corrosive and aggressive chemicals, including strong acids and alkalis, where traditional elastomer bellows would fail or degrade.\nThe seal maintains the robust and simple design of the MG1, which is a single-spring, unbalanced seal with a rotating bellows. This makes it a dependable and versatile choice for a broad range of rotary equipment, such as pumps, mixers, and agitators.\nTeflon bellows can operate effectively in a wider temperature range than traditional elastomer bellows, making the seal suitable for both cryogenic and high-temperature chemical applications.\nThe single-spring design is less prone to clogging than multi-spring designs. Its simple construction and compatibility with the MG1 standard make it a cost-effective solution for chemical applications, as it provides a longer service life in corrosive environments.",
        details: {
            technical_features: {
                Pressure: "Up to 6 bar (87 psi). Some balanced versions can handle higher pressures up to 35 bar.",
                "A non-pusher design with a PTFE bellows that provides a robust seal against highly corrosive media.": "Yes",
                "Equivalent to": "John Crane Type 10T/10R and Flowserve Chemiepac 970."
            },
            seal_face_combinations: [
                {
                    id: 108,
                    product_id: "teflon-mg1-type-tbm",
                    rotary_face: "Carbon Graphite",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "BQ"
                },
                {
                    id: 109,
                    product_id: "teflon-mg1-type-tbm",
                    rotary_face: "Carbon Graphite",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "BU"
                },
                {
                    id: 110,
                    product_id: "teflon-mg1-type-tbm",
                    rotary_face: "Silicon Carbide (SiC)",
                    stationary_face: "Silicon Carbide (SiC)",
                    seal_code: "QQ"
                },
                {
                    id: 111,
                    product_id: "teflon-mg1-type-tbm",
                    rotary_face: "Tungsten Carbide (TC)",
                    stationary_face: "Tungsten Carbide (TC)",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 85,
                    product_id: "teflon-mg1-type-tbm",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 86,
                    product_id: "teflon-mg1-type-tbm",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 87,
                    product_id: "teflon-mg1-type-tbm",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "type-156",
        slug: "type-156",
        name: "156/TYPE 156",
        primary_category_id: 1,
        primary_subcategory_id: 4,
        image: "/Individual Product Thumbnail/hex t166.jpg",
        short_description: "Type 156 conical spring O-ring mounted seal. Pusher type unbalanced seal. Suitable for light to medium duty pump applications.",
        description: "Why Choose Type 156?\nO-ring mounted seal face offers versatility. Cost-effective option for light duty applications. Suitable for water and mild chemical service.",
        details: {
            technical_features: {
                Design: "Pusher Type, Unbalanced",
                Spring: "Single Conical Spring",
                Type: "O-ring Mounted"
            },
            seal_face_combinations: [
                {
                    id: 98,
                    product_id: "type-156",
                    rotary_face: "Ceramic",
                    stationary_face: "Regular Carbon",
                    seal_code: "VC"
                },
                {
                    id: 99,
                    product_id: "type-156",
                    rotary_face: "Ceramic",
                    stationary_face: "Resin Carbon",
                    seal_code: "VR"
                },
                {
                    id: 100,
                    product_id: "type-156",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 88,
                    product_id: "type-156",
                    material: "High Nitrile / NBR",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / NBR",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 89,
                    product_id: "type-156",
                    material: "EPDM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPDM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 90,
                    product_id: "type-156",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "ptfe-seal",
        slug: "ptfe-seal",
        name: "PTFE SEAL",
        primary_category_id: 1,
        primary_subcategory_id: 7,
        image: "/Individual Product Thumbnail/hex t166.jpg",
        short_description: "PTFE mechanical seal for highly corrosive media. Exceptional chemical resistance. Wide temperature range. Suitable for pharmaceutical and chemical processing.",
        description: "Why Choose PTFE Seal?\nPTFE highly inert against virtually all chemicals. Flexible design prevents hang-up. Used in pharmaceutical, food and chemical industries.",
        details: {
            technical_features: {
                Material: "PTFE (Polytetrafluoroethylene)",
                Design: "Non-metallic, chemically inert",
                Applications: "Corrosive chemical, pharmaceutical, food processing"
            },
            seal_face_combinations: [
                {
                    id: 101,
                    product_id: "ptfe-seal",
                    rotary_face: "Glass-Filled PTFE",
                    stationary_face: "Silicon Carbide",
                    seal_code: "GFTQ"
                },
                {
                    id: 102,
                    product_id: "ptfe-seal",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 103,
                    product_id: "ptfe-seal",
                    rotary_face: "Carbon",
                    stationary_face: "Silicon Carbide",
                    seal_code: "BQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 91,
                    product_id: "ptfe-seal",
                    material: "High Nitrile / NBR",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / NBR",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 92,
                    product_id: "ptfe-seal",
                    material: "EPDM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPDM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 93,
                    product_id: "ptfe-seal",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "s20-type-s20",
        slug: "s20-type-s20",
        name: "S20/TYPE S20",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/MGS20.jpg",
        short_description: "Stationary seat type for elastomer bellows seals. Replacement for John Crane Type 1A and Vulcan Type 20. Pressure from vacuum to 30 bar.",
        description: "The S20 seal is not a specific Sealergy Seals product, but the designation &quot;S20&quot; refers to different types of seals depending on the manufacturer.\nA stationary seat type for elastomer bellows mechanical seals that are a replacement for other brands like John Crane Type 1A or Vulcan Type 20\nA polyamide security seal. These are cable tie-style seals used for tamper-evident applications like closing mailbags or securing truck doors.\n\nIn the context of mechanical seals, &quot;S20&quot; can refer to a high-performance cassette double seal. These seals are an excellent choice for demanding industries like chemical processing and power generation because they are designed to handle high pressures and temperatures. They are also engineered to prevent process leakage and have a long service life.\n&quot;S20&quot; can also refer to a type of hydraulic rod seal, designed for light to medium-duty cylinders. These seals are easy to install and are available in materials like NBR and polyurethane. The polyurethane version is a better choice for durability, as it offers superior wear resistance and a longer life than the NBR version.\nThe term &quot;S20&quot; is also used for security seals, which are a type of cable tie made of polyamide. These seals are used for tamper-evident applications on items like mailbags, check-in baggage, and truck doors. They are available in various colors and can be printed with a unique serial number or a logo for tracking and audit purposes.",
        details: {
            technical_features: {
                Pressure: "From 711 mm (28&quot;) Hg Vacuum to 30 bar g (450 psig).",
                "Designed to fit into standard O-ring grooves.": "Yes",
                "Can be used in both hydraulic and pneumatic systems, as well as valve seals in offshore and aviation applications.": "Yes"
            },
            seal_face_combinations: [
                {
                    id: 112,
                    product_id: "s20-type-s20",
                    rotary_face: "Regular Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "CV"
                },
                {
                    id: 113,
                    product_id: "s20-type-s20",
                    rotary_face: "Resin Carbon",
                    stationary_face: "Silicon Carbide",
                    seal_code: "RV"
                },
                {
                    id: 114,
                    product_id: "s20-type-s20",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 88,
                    product_id: "s20-type-s20",
                    material: "High Nitrile / Bhuna-N",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / Bhuna-N",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 89,
                    product_id: "s20-type-s20",
                    material: "EPEM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPEM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 90,
                    product_id: "s20-type-s20",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "single-spring-lps-150",
        slug: "single-spring-lps-150",
        name: "SINGLE SPRING LPS 150/TYPE LPS 150",
        primary_category_id: 1,
        primary_subcategory_id: 8,
        image: "/Individual Product Thumbnail/MULTI  SPRING.jpg",
        short_description: "Single spring conical diaphragm seal. Suitable for light to medium duty applications. Used in domestic and municipal water pump duties.",
        description: "Why Choose LPS 150?\nSimple single spring design. Easy to install and maintain. Suitable for clean water, glycols and light chemical service.",
        details: {
            technical_features: {
                Design: "Single Spring, Conical Diaphragm",
                Balance: "Unbalanced",
                Application: "Light to medium duty pumps"
            },
            seal_face_combinations: [
                {
                    id: 107,
                    product_id: "single-spring-lps-150",
                    rotary_face: "Regular Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "CV"
                },
                {
                    id: 108,
                    product_id: "single-spring-lps-150",
                    rotary_face: "Resin Carbon",
                    stationary_face: "Silicon Carbide",
                    seal_code: "RV"
                },
                {
                    id: 109,
                    product_id: "single-spring-lps-150",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 97,
                    product_id: "single-spring-lps-150",
                    material: "High Nitrile / NBR",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / NBR",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 98,
                    product_id: "single-spring-lps-150",
                    material: "EPDM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPDM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 99,
                    product_id: "single-spring-lps-150",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "single-spring-seal-ssp",
        slug: "single-spring-seal-ssp",
        name: "SINGLE SPRING SEAL SSP/TYPE SSP",
        primary_category_id: 1,
        primary_subcategory_id: 8,
        image: "/Individual Product Thumbnail/MULTI  SPRING.jpg",
        short_description: "SSP single spring pusher seal. Conical spring design. Suitable for water pumps, circulators and light industrial applications.",
        description: "Why Choose SSP?\nReliable single spring design with minimal parts. Easy installation and low maintenance. Economical sealing solution for general pump applications.",
        details: {
            technical_features: {
                Design: "Single Conical Spring, Pusher type",
                Balance: "Unbalanced",
                Application: "Water pumps, circulators, light industrial"
            },
            seal_face_combinations: [
                {
                    id: 110,
                    product_id: "single-spring-seal-ssp",
                    rotary_face: "Ceramic",
                    stationary_face: "Regular Carbon",
                    seal_code: "VC"
                },
                {
                    id: 111,
                    product_id: "single-spring-seal-ssp",
                    rotary_face: "Ceramic",
                    stationary_face: "Resin Carbon",
                    seal_code: "VR"
                },
                {
                    id: 112,
                    product_id: "single-spring-seal-ssp",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 100,
                    product_id: "single-spring-seal-ssp",
                    material: "High Nitrile / NBR",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / NBR",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 101,
                    product_id: "single-spring-seal-ssp",
                    material: "EPDM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPDM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 102,
                    product_id: "single-spring-seal-ssp",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "submersible-pump-type-ner",
        slug: "submersible-pump-type-ner",
        name: "SUBMERSIBLE PUMP/TYPE NER",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/BELOW.jpg",
        short_description: "Mechanical seal for submersible pump applications. Designed for continuous underwater operation. Resistant to water ingress and pressure.",
        description: "Why Choose Submersible Pump NER?\nSpecially designed for submersible pump duty. Handles continuous wet running. Reliable sealing for drainage and sewage applications.",
        details: {
            technical_features: {
                Application: "Submersible pumps",
                Design: "Submersible duty seal",
                Media: "Water, wastewater, drainage"
            },
            seal_face_combinations: [
                {
                    id: 113,
                    product_id: "submersible-pump-type-ner",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 114,
                    product_id: "submersible-pump-type-ner",
                    rotary_face: "Carbon",
                    stationary_face: "Silicon Carbide",
                    seal_code: "BQ"
                },
                {
                    id: 115,
                    product_id: "submersible-pump-type-ner",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 103,
                    product_id: "submersible-pump-type-ner",
                    material: "High Nitrile / NBR",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / NBR",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 104,
                    product_id: "submersible-pump-type-ner",
                    material: "EPDM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPDM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 105,
                    product_id: "submersible-pump-type-ner",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "sumo-oring-type-suo",
        slug: "sumo-oring-type-suo",
        name: "SUMO ORING/TYPE SUO",
        primary_category_id: 1,
        primary_subcategory_id: 8,
        image: "/Individual Product Thumbnail/J1OR.jpg",
        short_description: "SUMO O-ring type mechanical seal. Pusher type design for general industrial applications. Reliable sealing for water and chemical service.",
        description: "Why Choose Sumo O-Ring?\nRobust O-ring secondary seal. Cost-effective for general duty applications. Suitable for water, oils and mild chemicals.",
        details: {
            technical_features: {
                Design: "Pusher Type, O-Ring Mounted",
                Balance: "Unbalanced",
                Spring: "Single Conical Spring"
            },
            seal_face_combinations: [
                {
                    id: 116,
                    product_id: "sumo-oring-type-suo",
                    rotary_face: "Ceramic",
                    stationary_face: "Regular Carbon",
                    seal_code: "VC"
                },
                {
                    id: 117,
                    product_id: "sumo-oring-type-suo",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 118,
                    product_id: "sumo-oring-type-suo",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 106,
                    product_id: "sumo-oring-type-suo",
                    material: "High Nitrile / NBR",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / NBR",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 107,
                    product_id: "sumo-oring-type-suo",
                    material: "EPDM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPDM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 108,
                    product_id: "sumo-oring-type-suo",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "sumo-bellow-type-sub",
        slug: "sumo-bellow-type-sub",
        name: "SUMO BELLOW/TYPE SUB",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/J1 BELOW.jpg",
        short_description: "SUMO elastomer bellows mechanical seal. Non-pusher bi-directional design. Compact working length for water pump seal chambers.",
        description: "Why Choose Sumo Bellow?\nElastomer bellows provides bi-directional non-pusher performance. Compact design fits common water pump chambers. Minimizes shaft fretting.",
        details: {
            technical_features: {
                Design: "Non-Pusher, Bi-Directional",
                Bellows: "Elastomer Bellow",
                Balance: "Unbalanced"
            },
            seal_face_combinations: [
                {
                    id: 119,
                    product_id: "sumo-bellow-type-sub",
                    rotary_face: "Regular Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "CV"
                },
                {
                    id: 120,
                    product_id: "sumo-bellow-type-sub",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 121,
                    product_id: "sumo-bellow-type-sub",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 109,
                    product_id: "sumo-bellow-type-sub",
                    material: "High Nitrile / NBR",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / NBR",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 110,
                    product_id: "sumo-bellow-type-sub",
                    material: "EPDM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPDM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 111,
                    product_id: "sumo-bellow-type-sub",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "unitised-honda-type-uho",
        slug: "unitised-honda-type-uho",
        name: "UNITISED HONDA/TYPE UHO",
        primary_category_id: 1,
        primary_subcategory_id: 1,
        image: "/Individual Product Thumbnail/HONDA.jpg",
        short_description: "Unitised Honda type stationary-mounted compact elastomer bellows seal. Pre-assembled cartridge for ease of installation. High-speed water pump applications.",
        description: "Why Choose Unitised Honda?\nPre-assembled cartridge reduces installation errors. Boot-mounted design for high-shaft speed pumps. Bi-directional, no shaft contact.",
        details: {
            technical_features: {
                Design: "Unitised Cartridge, Stationary spring-loaded",
                Balance: "Unbalanced",
                Direction: "Bi-directional, independent of rotation"
            },
            seal_face_combinations: [
                {
                    id: 122,
                    product_id: "unitised-honda-type-uho",
                    rotary_face: "Ceramic",
                    stationary_face: "Regular Carbon",
                    seal_code: "VC"
                },
                {
                    id: 123,
                    product_id: "unitised-honda-type-uho",
                    rotary_face: "Ceramic",
                    stationary_face: "Resin Carbon",
                    seal_code: "VR"
                },
                {
                    id: 124,
                    product_id: "unitised-honda-type-uho",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 112,
                    product_id: "unitised-honda-type-uho",
                    material: "High Nitrile / NBR",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / NBR",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 113,
                    product_id: "unitised-honda-type-uho",
                    material: "EPDM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPDM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 114,
                    product_id: "unitised-honda-type-uho",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "acid-pump-teflone-type-apt",
        slug: "acid-pump-teflone-type-apt",
        name: "ACID PUMP TEFLONE/TYPE APT",
        primary_category_id: 1,
        primary_subcategory_id: 7,
        image: "/Individual Product Thumbnail/APT.jpg",
        short_description: "PTFE Teflon acid pump seal. Superior chemical resistance against strong acids. Non-metallic design for aggressive media. Wide temperature range.",
        description: "Why Choose Acid Pump Teflon?\nPTFE construction provides unmatched chemical resistance. Handles strongest acids where other materials fail. Used in chemical plants and laboratories.",
        details: {
            technical_features: {
                Material: "PTFE (Teflon) Construction",
                Application: "Acid pumps, aggressive chemical service",
                Resistance: "Resistant to virtually all chemicals"
            },
            seal_face_combinations: [
                {
                    id: 128,
                    product_id: "acid-pump-teflone-type-apt",
                    rotary_face: "Glass-Filled PTFE",
                    stationary_face: "Silicon Carbide",
                    seal_code: "GFTQ"
                },
                {
                    id: 129,
                    product_id: "acid-pump-teflone-type-apt",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 130,
                    product_id: "acid-pump-teflone-type-apt",
                    rotary_face: "Carbon",
                    stationary_face: "Ceramic",
                    seal_code: "BV"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 118,
                    product_id: "acid-pump-teflone-type-apt",
                    material: "EPDM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPDM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 119,
                    product_id: "acid-pump-teflone-type-apt",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                },
                {
                    id: 120,
                    product_id: "acid-pump-teflone-type-apt",
                    material: "PTFE",
                    min_temp: -60,
                    max_temp: 200,
                    elastomer_name: "PTFE",
                    temperature_min: -60,
                    temperature_max: 200,
                    temperature_unit: "C"
                }
            ]
        }
    },
    {
        id: "m7n-type-m7",
        slug: "m7n-type-m7",
        name: "M7N/TYPE M7",
        primary_category_id: 1,
        primary_subcategory_id: 6,
        image: "/Individual Product Thumbnail/M7N.jpg",
        short_description: "M7N multi-spring mechanical seal. Replacement for Burgmann M7N. Multiple springs for uniform face loading. Balanced design for high-pressure applications.",
        description: "Why Choose M7N?\nMultiple springs provide uniform pressure reducing face distortion. Balanced design handles higher pressures with less wear. Versatile for pumps and mixers.",
        details: {
            technical_features: {
                Design: "Multiple Springs, Balanced",
                Direction: "Independent of direction of rotation",
                Equivalent: "Burgmann M7N"
            },
            seal_face_combinations: [
                {
                    id: 134,
                    product_id: "m7n-type-m7",
                    rotary_face: "Carbon Graphite",
                    stationary_face: "Silicon Carbide",
                    seal_code: "BQ"
                },
                {
                    id: 135,
                    product_id: "m7n-type-m7",
                    rotary_face: "Silicon Carbide",
                    stationary_face: "Silicon Carbide",
                    seal_code: "QQ"
                },
                {
                    id: 136,
                    product_id: "m7n-type-m7",
                    rotary_face: "Tungsten Carbide",
                    stationary_face: "Tungsten Carbide",
                    seal_code: "UU"
                }
            ],
            elastomer_temperatures: [
                {
                    id: 124,
                    product_id: "m7n-type-m7",
                    material: "High Nitrile / NBR",
                    min_temp: -30,
                    max_temp: 120,
                    elastomer_name: "High Nitrile / NBR",
                    temperature_min: -30,
                    temperature_max: 120,
                    temperature_unit: "C"
                },
                {
                    id: 125,
                    product_id: "m7n-type-m7",
                    material: "EPDM",
                    min_temp: -40,
                    max_temp: 140,
                    elastomer_name: "EPDM",
                    temperature_min: -40,
                    temperature_max: 140,
                    temperature_unit: "C"
                },
                {
                    id: 126,
                    product_id: "m7n-type-m7",
                    material: "Viton/FKM",
                    min_temp: -30,
                    max_temp: 180,
                    elastomer_name: "Viton/FKM",
                    temperature_min: -30,
                    temperature_max: 180,
                    temperature_unit: "C"
                }
            ]
        }
    }
];

export const applications: Application[] = [
    { id: 1, name: "Water & Wastewater", slug: "water-and-wastewater", description: "Durable, corrosion-resistant seals for continuous service in water treatment and distribution.", image: "/assets/Water & Wastewater.jpg", imageHint: "water treatment" },
    { id: 2, name: "Oil & Gas", slug: "oil-and-gas", description: "High-pressure, high-temperature seals engineered for hydrocarbon and abrasive fluid applications in the oil and gas industry.", image: "/assets/Oil & Gas.jpg", imageHint: "oil rig" },
    { id: 3, name: "Chemical Processing", slug: "chemical-processing", description: "Chemically inert seals made from materials like PTFE and Viton to handle corrosive and aggressive media safely.", image: "/assets/Chemical Processing.jpg", imageHint: "chemical plant" },
    { id: 4, name: "Power Generation", slug: "power-generation", description: "Reliable sealing solutions for turbines, boiler feed pumps, and auxiliary systems in power plants.", image: "/assets/Power Generation.jpg", imageHint: "power plant" },
    { id: 5, name: "Pharmaceutical", slug: "pharmaceutical", description: "Hygienic, contamination-free seals that meet stringent FDA and cGMP standards for pharmaceutical manufacturing.", image: "/assets/Food & Beverage.jpg", imageHint: "pharmaceutical factory" },
    { id: 6, name: "Food & Beverage", slug: "food-and-beverage", description: "Food-grade seals that comply with hygienic standards for safe and reliable processing of consumables.", image: "/assets/Food & Beverage.jpg", imageHint: "food factory" },
    { id: 7, name: "HVAC & Cooling", slug: "hvac-and-cooling", description: "Specialized seals designed for refrigerants, brines, and other thermal fluids in heating, ventilation, and air conditioning systems.", image: "/assets/Power Generation.jpg", imageHint: "hvac system" },
    { id: 8, name: "Marine & Shipbuilding", slug: "marine-and-shipbuilding", description: "Durable, saltwater-tolerant mechanical seals for bilge pumps, cargo pumps, and other marine applications.", image: "/assets/Mining.jpg", imageHint: "shipbuilding" },
];

export const articles: SupportArticle[] = [
    { 
        id: 1, 
        slug: "preventing-seal-failure-in-high-rpm-applications", 
        title: "Preventing Seal Failure in High-RPM Applications", 
        content: `<h2>Understanding the Dynamics of High-RPM Environments</h2><p>High-RPM (Revolutions Per Minute) rotating equipment places extraordinary physical demands on mechanical seals. As rotational speeds increase, centrifugal forces, frictional heat, and face surface velocities multiply exponentially. Understanding how to prevent premature failure in these conditions is essential for maintaining process uptime and avoiding catastrophic fluid release.</p><h3>Key Causes of High-Speed Seal Failures</h3><ul><li><strong>Excessive Heat Generation (Thermal Distort)</strong>: Frictional heat generated at the interface between the rotary and stationary faces can vaporize the fluid film that provides lubrication, leading to dry running and face fracture.</li><li><strong>Centrifugal Force Effects</strong>: High speeds can cause particulates or suspended solids in the fluid to accumulate on the outer diameter of the seal faces, causing accelerated abrasive wear.</li><li><strong>Vibration and Shaft Runout</strong>: Dynamic forces at high RPMs aggravate even minor shaft misalignment, causing faces to wobble, separate, or crack.</li></ul><h3>Engineering Mitigations & Vortex Reduction</h3><p>Sealergy implements several cutting-edge vortex-reduction and thermal dissipation technologies in our high-speed designs:</p><ol><li><strong>Hydraulically Balanced Faces</strong>: Balanced seals reduce the net closing force on the seal faces, significantly lowering frictional heat while maintaining an optimal fluid film.</li><li><strong>Directional Pumping Grooves</strong>: Laser-etched micro-grooves on the seal faces act as pumping rings, drawing cooling fluid directly across the sealing interface.</li><li><strong>Premium Materials</strong>: Silicon Carbide (SiC) vs. Silicon Carbide configurations offer the superior thermal conductivity and hardness needed to withstand continuous high-velocity shear.</li></ol>` 
    },
    { 
        id: 2, 
        slug: "how-to-choose-the-right-pump-seal", 
        title: "How to Choose the Right Pump Seal", 
        content: `<h2>The S.T.A.R.P. Methodology for Mechanical Seal Selection</h2><p>Selecting the correct mechanical seal is the single most critical factor in ensuring pump reliability. A mismatch between the seal design and the process conditions can cause failure within days or even hours. Sealergy utilizes the comprehensive <strong>S.T.A.R.P.</strong> methodology to guide engineers to the correct choice.</p><h3>1. Size (S)</h3><p>Determine the precise physical dimensions of the pump:</p><ul><li>Shaft or sleeve outer diameter.</li><li>Stuffing box/seal chamber bore diameter.</li><li>Stuffing box depth and distance to the nearest obstruction.</li></ul><h3>2. Temperature (T)</h3><p>The operating temperature of the process fluid dictates the elastomer selection. High-temperature applications (above 150°C) require Viton (FKM), Kalrez (FFKM), or metal bellows. Cryogenic applications require highly specialized static packings.</p><h3>3. Application/Media (A)</h3><p>Analyze the chemical properties of the pumped fluid:</p><ul><li><strong>Corrosiveness</strong>: Acidic or alkaline fluids require chemically inert PTFE (Teflon) seals.</li><li><strong>Abrasiveness</strong>: Slurries or suspended solids demand hard-hard face combinations like Tungsten Carbide (TC) to prevent scoring.</li><li><strong>Hygienic Requirements</strong>: Food, beverage, and pharma applications require FDA-compliant materials and self-draining profiles.</li></ul><h3>4. Rate/Speed (R)</h3><p>Rotational shaft speed determines whether an unbalanced, balanced, or high-speed static seal is required. High speeds demand static-spring designs where the springs do not rotate, preventing spring distortion due to centrifugal force.</p><h3>5. Pressure (P)</h3><p>Verify the seal chamber pressure. Standard seals operate up to 10-12 bar. Higher pressures (up to 80 bar) demand balanced multi-spring seals like our <strong>H17N</strong> series or metal bellows configurations.</p>` 
    },
    { 
        id: 3, 
        slug: "iso-9001-in-seal-manufacturing", 
        title: "ISO 9001 in Seal Manufacturing", 
        content: `<h2>Quality Management Systems & Precision Engineering</h2><p>In mechanical seal manufacturing, tolerance is measured in microns. Even a microscopically small variance can compromise the face flatness, leading to fluid leakage. This is why Sealergy operates under a rigorous ISO 9001:2015 certified Quality Management System (QMS).</p><h3>What ISO 9001 Means for Our Sealing Products</h3><ul><li><strong>Traceability</strong>: Every single raw material—from raw silicon carbide to stainless steel bars—comes with certified material test reports (MTRs) and is fully traceable back to its origin.</li><li><strong>Ultrasonic Testing</strong>: We utilize non-destructive ultrasonic and liquid penetrant testing to verify that there are no subsurface cracks or stress anomalies in our seal face castings.</li><li><strong>Helium Light Band Flatness Verification</strong>: After final lapping, all sealing faces are inspected under monochromatic light using optical flats. We guarantee a flatness tolerance within <strong>1 to 2 light bands</strong> (0.3 to 0.6 microns).</li></ul><h3>Continuous Auditing & Process Control</h3><p>Our Mumbai-based manufacturing facility undergoes continuous internal and external audits to ensure process parameters are strictly maintained. Every seal assembly is pressure-tested on specialized pneumatic test rigs before it is packaged and shipped, ensuring out-of-the-box reliability.</p>` 
    },
    { 
        id: 4, 
        slug: "advanced-materials-for-extreme-conditions", 
        title: "Advanced Materials for Extreme Conditions", 
        content: `<h2>Material Science: The Foundation of Sealing Success</h2><p>Modern industrial processing regularly pushes temperature, pressure, and chemical aggressiveness to extreme levels. Surviving these conditions requires selecting advanced materials engineered for extreme durability.</p><h3>1. Seal Face Materials</h3><table class="min-w-full border-collapse border border-slate-200 mt-4 mb-6"><thead><tr class="bg-slate-100"><th class="border border-slate-200 p-2 text-left text-sm font-semibold">Material</th><th class="border border-slate-200 p-2 text-left text-sm font-semibold">Thermal Conductivity</th><th class="border border-slate-200 p-2 text-left text-sm font-semibold">Best Applied For</th></tr></thead><tbody><tr><td class="border border-slate-200 p-2 text-sm font-medium">Silicon Carbide (SiC)</td><td class="border border-slate-200 p-2 text-sm">Extremely High</td><td class="border border-slate-200 p-2 text-sm">Corrosive fluids, fast rotation, and general industrial water.</td></tr><tr class="bg-slate-50"><td class="border border-slate-200 p-2 text-sm font-medium">Tungsten Carbide (TC)</td><td class="border border-slate-200 p-2 text-sm">High</td><td class="border border-slate-200 p-2 text-sm">Slurries, high pressures, and heavy vibration. Resistant to fracture.</td></tr><tr><td class="border border-slate-200 p-2 text-sm font-medium">Resin Carbon</td><td class="border border-slate-200 p-2 text-sm">Medium</td><td class="border border-slate-200 p-2 text-sm">Excellent dry-running/self-lubrication properties in clean fluids.</td></tr></tbody></table><h3>2. Elastomers and O-Rings</h3><ul><li><strong>Viton (FKM)</strong>: Outstanding chemical resistance in oils, fuels, and acids up to 180°C.</li><li><strong>EPDM</strong>: The premier choice for hot water, steam, and water-glycol mixtures up to 140°C.</li><li><strong>PTFE (Teflon)</strong>: Fully inert to virtually all acids and alkalis, making it indispensable in heavy chemical applications.</li></ul>` 
    },
    { 
        id: 5, 
        slug: "installation-guide", 
        title: "Installation Guide", 
        content: `<h2>Step-by-Step Installation Guide for Sealergy Mechanical Seals</h2><p>Over 80% of premature mechanical seal failures are caused by improper installation. Following a clean, methodical installation procedure is the easiest way to ensure the long-term reliability of your rotating equipment.</p><h3>Pre-Installation Checklist</h3><ol><li><strong>Cleanliness is Paramount</strong>: Perform the installation in a clean, dust-free environment. Even a single speck of dust on the seal faces can cause leakage.</li><li><strong>Inspect the Shaft</strong>: Ensure the shaft or sleeve is completely free of burrs, scratches, or corrosion. Polish away any roughness with fine emery cloth.</li><li><strong>Verify Shaft Runout</strong>: Use a dial indicator to ensure the shaft radial runout is within <strong>0.05 mm (0.002 inches)</strong> and axial play is less than 0.08 mm.</li></ol><h3>Installation Steps</h3><p><strong>Step 1: Mount the Stationary Seat</strong><br />Lubricate the static elastomer (O-ring or boot) with a compatible lubricant (soapy water or silicone spray—never use grease on EPDM!). Press the seat firmly into the gland plate using a clean cloth or cardboard protector.</p><p><strong>Step 2: Position the Rotary Assembly</strong><br />Gently slide the rotary unit onto the shaft. Be extremely careful not to scrape the inner elastomer bellows or O-ring over keyways or sharp shoulders (wrap keyways in plastic tape before sliding the seal on).</p><p><strong>Step 3: Align the Sealing Faces</strong><br />Bring the gland plate containing the stationary seat up to the pump housing. Ensure the faces meet completely parallel and flat. Tighten the gland bolts in a star pattern to ensure even pressure.</p>` 
    },
    { 
        id: 6, 
        slug: "maintenance-tips", 
        title: "Maintenance Tips", 
        content: `<h2>Best Practices for Extending Mechanical Seal Lifespan</h2><p>Once installed, a mechanical seal is a dynamic system that requires the correct operating environment to thrive. Proper preventive maintenance and fluid management will dramatically extend your seal's lifetime.</p><h3>1. Maintain the Lubrication Film</h3><p>Mechanical seals rely on a microscopically thin fluid film (the process fluid itself) between the rotating faces to lubricate and cool them. <strong>Never run a pump dry.</strong> Dry running causes instantaneous heat buildup, leading to thermal shock and immediate face failure.</p><h3>2. Optimize Environmental Piping Plans (API Plans)</h3><p>Implementing the correct API piping plan provides the necessary temperature and pressure control:</p><ul><li><strong>API Plan 11 (Discharge Flush)</strong>: Recirculates fluid from the pump discharge to the seal chamber to provide cooling.</li><li><strong>API Plan 53A (Dual Seal Pressurized Barrier)</strong>: Uses a pressurized barrier reservoir to prevent toxic or abrasive fluids from entering the sealing faces, ensuring zero leakage of process fluid.</li></ul><h3>3. Monitor Vibration Levels</h3><p>Vibration is the silent enemy of seal faces. Establish a regular vibration-monitoring schedule. Elevated vibration is a warning sign of coupling misalignment, bearing wear, or impeller imbalance—all of which will quickly ruin your mechanical seal.</p>` 
    },
    { 
        id: 7, 
        slug: "technical-specs", 
        title: "Technical Specs", 
        content: `<h2>Standard Operating Parameters & Manufacturing Tolerances</h2><p>All Sealergy mechanical seals are manufactured in strict compliance with international standards, including DIN 24960, EN 12756, and API 682. This ensures complete dimensional interchangeability with major OEM brands.</p><h3>Key Operating Capabilities</h3><ul><li><strong>Pressure Limits</strong>: Standard unbalanced elastomer bellows seals operate up to 12 bar (174 psi). Balanced multiple spring seals operate up to 80 bar (1,160 psi).</li><li><strong>Temperature Range</strong>: From -40°C up to +200°C depending on the elastomer selection (EPDM, NBR, Viton, or PTFE).</li><li><strong>Shaft Velocity</strong>: Standard seals accommodate speeds up to 15 m/s. Specialized balanced models are certified up to 25 m/s.</li></ul><h3>Metrology & Flatness Tolerances</h3><ul><li><strong>Face Flatness</strong>: Measured utilizing monochromatic Helium light bands. Permissible tolerance is <strong>1 to 2 light bands</strong> (0.3 - 0.6 microns).</li><li><strong>Dimensional Tolerance</strong>: Precision machined stainless steel components are held within <strong>±0.05 mm</strong>.</li><li><strong>Spring Compression Force</strong>: Calibrated springs maintain a uniform face loading pressure between 1.5 to 2.2 kg/cm².</li></ul>` 
    },
    { 
        id: 8, 
        slug: "troubleshooting-guide", 
        title: "Troubleshooting Guide", 
        content: `<h2>Diagnostic Guide: Identifying Common Seal Failure Modes</h2><p>When a mechanical seal fails, the damage left behind on the faces and elastomers provides critical clues. Analyzing these failure patterns allows you to identify the root cause and implement the correct fix.</p><h3>1. Face Wear Patterns & Diagnostics</h3><ul><li><strong>Thermal Cracking/Blistering</strong>: Radial cracks on the face indicate extreme local heat. <em>Root Cause</em>: Dry running or insufficient cooling flush.</li><li><strong>Heavy Uniform Scoring</strong>: Deep concentric grooves on the faces. <em>Root Cause</em>: Solid particulates or abrasive slurries trapped in the seal chamber. **Fix**: Upgrade to hard faces (Silicon Carbide) or install a clean external flush.</li><li><strong>Concentric Wear Track Deviation</strong>: Uneven wear track. <em>Root Cause</em>: Severe shaft misalignment or gland plate cocking.</li></ul><h3>2. Elastomer (O-Ring & Bellows) Diagnostics</h3><ul><li><strong>Swelling or Softening</strong>: The O-ring is sticky or deformed. <em>Root Cause</em>: Chemical incompatibility with the process fluid. **Fix**: Upgrade NBR to Viton or PTFE.</li><li><strong>Blistering/Exploding</strong>: The elastomer has tiny craters or has ruptured. <em>Root Cause</em>: Rapid gas decompression in high-pressure gas service.</li><li><strong>Hardening or Cracking</strong>: The rubber is brittle and snaps easily. <em>Root Cause</em>: Operating beyond the thermal limit of the elastomer.</li></ul>` 
    },
];














import styles from './WorldMap.module.css';

interface WorldMapProps {
    highlightedCountries: string[]; // Array of ISO 2-letter country codes
}

const WorldMap = ({ highlightedCountries }: WorldMapProps) => {
    // Simplified paths for major regions/countries. 
    // In a real app, we'd use a proper GeoJSON or a more detailed SVG.
    // For this demo, I'll use a simplified representation.

    const isHighlighted = (code: string) => highlightedCountries.includes(code);

    return (
        <div className={styles.mapContainer}>
            <h2 className={styles.mapTitle}>Global Presence</h2>
            <svg
                viewBox="0 0 1000 500"
                className={styles.mapSvg}
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* North America */}
                <path
                    d="M 50 50 L 300 50 L 300 200 L 150 250 L 50 150 Z"
                    className={`${styles.country} ${isHighlighted('US') || isHighlighted('CA') ? styles.active : ''}`}
                >
                    <title>North America</title>
                </path>

                {/* South America */}
                <path
                    d="M 200 260 L 320 260 L 300 450 L 220 480 Z"
                    className={`${styles.country} ${isHighlighted('BR') || isHighlighted('AR') ? styles.active : ''}`}
                >
                    <title>South America</title>
                </path>

                {/* Europe */}
                <path
                    d="M 450 50 L 600 50 L 580 150 L 450 150 Z"
                    className={`${styles.country} ${isHighlighted('DE') || isHighlighted('GB') || isHighlighted('FR') ? styles.active : ''}`}
                >
                    <title>Europe</title>
                </path>

                {/* Asia */}
                <path
                    d="M 610 50 L 950 50 L 900 250 L 650 250 L 610 160 Z"
                    className={`${styles.country} ${isHighlighted('CN') || isHighlighted('IN') || isHighlighted('JP') ? styles.active : ''}`}
                >
                    <title>Asia</title>
                </path>

                {/* Africa */}
                <path
                    d="M 450 170 L 620 170 L 600 350 L 480 350 Z"
                    className={`${styles.country} ${isHighlighted('ZA') || isHighlighted('EG') ? styles.active : ''}`}
                >
                    <title>Africa</title>
                </path>

                {/* Australia */}
                <path
                    d="M 750 300 L 900 300 L 900 450 L 750 450 Z"
                    className={`${styles.country} ${isHighlighted('AU') ? styles.active : ''}`}
                >
                    <title>Australia</title>
                </path>
            </svg>
            <p className="text-center mt-md" style={{ color: 'var(--gray-500)' }}>
                Serving clients in over {highlightedCountries.length * 5}+ countries worldwide.
            </p>
        </div>
    );
};

export default WorldMap;

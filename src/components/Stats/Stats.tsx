import styles from './Stats.module.css';

interface Stat {
    _key: string;
    label: string;
    value: string;
}

interface StatsProps {
    stats: Stat[];
}

const Stats = ({ stats }: StatsProps) => {
    if (!stats || stats.length === 0) return null;

    return (
        <section className={styles.statsSection}>
            <div className="container">
                <div className={styles.statsGrid}>
                    {stats.map((stat) => (
                        <div key={stat._key} className={styles.statItem}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

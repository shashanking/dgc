import styles from './ProductTable.module.css';

interface Product {
    productName: string;
    standard: string;
    category: string;
    description: string;
    link?: string;
}

interface ProductTableProps {
    products: Product[];
}

const ProductTable = ({ products }: ProductTableProps) => {
    if (!products || products.length === 0) {
        return <p>No products listed for this service.</p>;
    }

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Standard</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.productName}</td>
                            <td>{product.standard}</td>
                            <td>{product.category}</td>
                            <td>{product.description}</td>
                            <td>
                                {product.link ? (
                                    <a href={product.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>
                                        View
                                    </a>
                                ) : (
                                    '-'
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;

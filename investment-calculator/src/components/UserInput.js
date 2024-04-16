const UserInput = ({ onChange, inputData }) => {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        required
                        type="number"
                        value={inputData.initialInvestment}
                        onChange= {(event) => onChange('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        required
                        type="number"
                        value={inputData.annualInvestment}
                        onChange= {(event) => onChange('annualInvestment', event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Returns</label>
                    <input
                        required
                        type="number"
                        value={inputData.expectedReturn}
                        onChange= {(event) => onChange('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        required
                        type="number"
                        value={inputData.duration}
                        onChange= {(event) => onChange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}

export default UserInput;
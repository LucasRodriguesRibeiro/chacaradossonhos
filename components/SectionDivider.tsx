import React from 'react';

interface Props {
    position?: 'top' | 'bottom';
    variant?: 'wave' | 'curve' | 'tilt';
    color?: string;
    className?: string;
    flip?: boolean;
}

const SectionDivider: React.FC<Props> = ({
    position = 'bottom',
    variant = 'wave',
    color = 'fill-white',
    className = '',
    flip = false
}) => {
    const getPath = () => {
        switch (variant) {
            case 'curve':
                return "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
            case 'tilt':
                return "M0,128L1440,32L1440,320L0,320Z";
            case 'wave':
            default:
                // A nice organic wave
                return "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
        }
    };

    const style = {
        position: 'absolute' as const,
        [position]: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        transform: position === 'top' ? 'rotate(180deg)' : 'none',
        zIndex: 1
    };

    return (
        <div className={`absolute left-0 w-full overflow-hidden leading-[0] ${position === 'top' ? '-top-1' : '-bottom-1'} z-10 ${className}`} style={{ transform: position === 'top' ? 'rotate(180deg)' : undefined }}>
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className={`relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[120px] ${color} ${flip ? 'scale-x-[-1]' : ''}`}
            >
                <path d={getPath()} />
            </svg>
        </div>
    );
};

export default SectionDivider;

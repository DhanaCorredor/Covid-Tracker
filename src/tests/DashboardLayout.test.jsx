import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { DashboardLayout } from "../pages/DashboardLayout"


vi.mock('../components/layout/dataSidebar/SidebarData', () => ({
    SidebarData: () => (
        <div data-testid="sidebar-data-container">
            {[...Array(6)].map((_, i) => (
                <div key={i} data-testid="tracker-item">Tracker {i + 1}</div>
            ))}
        </div>
    )
}));


describe('DashboardLayout es Responsive', () => {

    const renderLayout = () => {
        return render(
            <MemoryRouter>
                <DashboardLayout />
            </MemoryRouter>
        );
    };
    it('debe tener las clases de Tailwind para ocultarse en mobile y mostrarse en desktop', () => {
        renderLayout();

        
        const wrapper = screen.getByTestId('sidebar-data-container').parentElement;

        expect(wrapper).toHaveClass('hidden');
        expect(wrapper).toHaveClass('md:flex');
    });

    it('debe renderizar 6 trackers dentro de SidebarData', () => {
        renderLayout();
        const trackers = screen.getAllByTestId('tracker-item');
        expect(trackers).toHaveLength(6);
    });

    

    
});
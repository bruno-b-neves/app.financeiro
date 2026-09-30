export const useSidebar = () => {
  const isCollapsed = useState<boolean>("sidebar-collapsed", () => true);

  const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
  };

  return { isCollapsed, toggleSidebar };
};
